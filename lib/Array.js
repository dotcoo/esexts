// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps, adapterMethods, iteratorMethods } from './util';

d(Array, {
  ...staticNew(),
  // ====== from pinojs ======
  range: function(...args) {
    let a = [], start = 0, end = 0, step = 1, input = typeof args[args.length - 1] === 'boolean' ? args.pop() : true, func = typeof args[args.length - 1] === 'function' ? args.pop() : (v, i, a) => v;
    switch (args.length) {
      case 1: [end] = args; break;
      case 2: [start, end] = args; break;
      case 3: [start, end, step] = args; break;
      default: throw new Error('the number of parameters is incorrect!'); break;
    }
    if (step == 0) { throw new Error('step cannot be 0!'); }
    for (let i = 0, c = 0, e = Math.abs(end - start), s = Math.abs(step), d = (start <= end ? 1 : -1); c < e; c += s) {
      a.push(input ? func(start + c * d, i++, a) : func());
    }
    return a;
  },
});

d(Array.prototype, {
  ...adapterProps('length'),
  ...iteratorMethods(Array.prototype, 'entries', 'keys', 'values'),
  ...adapterMethods(Array.prototype, null, '', 'map'),
  ...adapterMethods(Array.prototype, null, 't', ['push', '$push'], ['pop', '$pop'], ['shift', '$shift'], ['unshift', '$unshift'], ['splice', '$splice']),
  ...adapterMethods(Array.prototype, null, 'a', 'push', 'unshift'),
  ...adapterMethods(Array.prototype, null,  0 , 'push', 'unshift'),
  $empty: function() {
    return this.length == 0;
  },
  first: function(defval = null) {
    return this.length ? this[0] : defval;
  },
  last: function(defval = null) {
    return this.length ? this[this.length - 1] : defval;
  },
  $find: function(cb, defval = null) {
    return this.find(cb) ?? defval;
  },
  equals: function(a) {
    return this.length === a.length && (this === a || this.length === 0 || this.every((v, i) => v === a[i]));
  },
  unique: function(cb = v => v) {
    const s = new Set();
    return this.filter(v => s.has(cb(v)) ? false : !!s.add(cb(v)));
  },
  ...adapterMethods(Array.prototype, null, 't', ['forEach', 'each']),
  each$async: async function(cb) {
    for (let i = 0; i < this.length; i++) {
      await cb(this[i], i, this);
    }
    return this;
  },
  map$async: async function(cb) {
    const a = [];
    for (let i = 0; i < this.length; i++) {
      a.push(await cb(this[i], i, this));
    }
    return a;
  },
  shuffle: function(clone = false) {
    let l = this.length;
    while (l) {
      const i = Math.random() * l-- | 0;
      [this[i], this[l]] = [this[l], this[i]];
    }
    return this;
  },
  // ====== collection ======
  union: function (a) {
    return Set.new(this).union(Set.new(a)).toArray();
  },
  intersection: function(a) {
    return Set.new(this).intersection(Set.new(a)).toArray();
  },
  difference: function (a) {
    return Set.new(this).difference(Set.new(a)).toArray();
  },
  symmetricDifference: function(a) {
    return Set.new(this).symmetricDifference(Set.new(a)).toArray();
  },
  // ====== convert ======
  toMap: function(cb = (v, i) => [i, v]) {
    return new Map(this.map(cb));
  },
  toSet: function(cb = v => v) {
    return new Set(this.map(cb));
  },
  // ====== Uint8Array ======
  toUint8Array: function() {
    return new Uint8Array(this);
  },
  toBase64: function() {
    return this.toUint8Array().toBase64();
  },
  toHex: function() {
    return this.toUint8Array().toHex();
  },
  // ====== TextDecoder ======
  decode: function() {
    return this.toUint8Array().toString();
  },
  // ====== Relational ======
  assoc: function(id, prop, assoc = {}) {
    const ids = this.unique$(v => v[id]);
    const o = ids.length == 0 ? {} : typeof assoc == 'function' ? assoc(ids) : assoc;
    return this.each$(v => v[prop] = o[v[id]] ?? null);
  },
  // ====== Tree ======
  toTree: function(o = {}) {
    const { id = 'id', pid = 'pid', level = 'level', root = 'root', parent = 'parent', children = 'children', empty = null, hasRoot = true } = o;
    const parents = this.reduce((a, c) => a.$attr(c[id], c), {}), childrens = this.reduce((a, c) => (a.$attr(c[pid], [], false).$attr(c[pid]).$push(c), a), {});
    const r = this.length && hasRoot ? this.find(v => v[pid] === 0) : { [id]: 0, [pid]: -1, [root]: null, [parent]: null, [children]: childrens[0] };
    d(r, { [root]: r });
    for (const v of this) {
      d(v, { [root]: r, [parent]: parents[v[pid]] });
      v[children] = childrens[v[id]] || empty;
    }
    r.$tree$each(v => v[level] = v[parent] ? v[parent][level] + 1 : 0, -1, children);
    return r;
  },
  $tree2tree: function(o = {}, r = null, p = null) {
    const { id = 'id', pid = 'pid', level = 'level', root = 'root', parent = 'parent', children = 'children', empty = null } = o;
    r = r || { [id]: 0, [pid]: -1, [level]: 0, [root]: null, [parent]: null, [children]: this };
    p = p || r;
    for (const v of this) {
      d(v, { [root]: r, [parent]: p });
      v[pid] = p[id];
      v[level] = p[level] + 1;
      v[children] = v[children] && v[children].length ? v[children] : empty;
      v[children]?.$tree2tree(o, r, v);
    }
    return r;
  },
  $tree$find: function(cb, self = true, depth = -1, children = 'children') {
    for (const v of this) {
      const r = v.$tree$find(cb, self, depth, children);
      if (r !== null) { return r; }
    }
    return null;
  },
  $tree$each: function(cb, self = true, depth = -1, children = 'children') {
    for (const v of this) {
      v.$tree$each(cb, self, depth, children);
    }
    return this;
  },
  $tree$map: function(cb, self = true, depth = -1, children = 'children', empty = null) {
    return this.map(v => v.$tree$map(cb, self, depth, children, empty));
  },
});
