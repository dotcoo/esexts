// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps, adapterMethods, iteratorMethods } from './util';

d(Array, {
  ...staticNew(),
});

d(Array.prototype, {
  ...adapterProps(['length', 'length0']),
  ...iteratorMethods(Array.prototype, ['entries', 'entries0'], ['keys', 'keys0'], ['values', 'values0']),
  ...adapterMethods(Array.prototype, null, false, ['push', 'push0'], ['pop', 'pop0'], ['shift', 'shift0'], ['unshift', 'unshift0']),
  ...adapterMethods(Array.prototype, null, 1, ['push', 'push1'], ['unshift', 'unshift1']),
  ...adapterMethods(Array.prototype, null, true, ['push', 'push3'], ['unshift', 'unshift3']),
  first0: function(defval = null) {
    return this.length ? this[0] : defval;
  },
  last0: function(defval = null) {
    return this.length ? this[this.length - 1] : defval;
  },
  find0: function(cb, defval = null) {
    return this.find(cb) ?? defval;
  },
  equals0: function(a) {
    return this.length === a.length && (this === a || this.length === 0 || this.every((v, i) => v === a[i]));
  },
  unique0: function(cb = v => v) {
    const s = new Set();
    return this.filter(v => s.has(cb(v)) ? false : !!s.add(cb(v)));
  },
  ...adapterMethods(Array.prototype, null, false, ['forEach', 'each0']),
  eachAsync: async function(cb) {
    for (let i = 0; i < this.length; i++) {
      await cb(this[i], i, this);
    }
    return this;
  },
  mapAsync: async function(cb) {
    const a = [];
    for (let i = 0; i < this.length; i++) {
      a.push(await cb(this[i], i, this));
    }
    return a;
  },
  toMap: function(cb = (v, i) => [i, v]) {
    return new Map(this.map(cb));
  },
  toSet: function(cb = v => v) {
    return new Set(this.map(cb));
  },
  bytes2string: function() {
    return this.toUint8Array().bytes2string();
  },
  bytes2hex: function() {
    return this.toUint8Array().toHex();
  },
  base64encode: function() {
    return this.toUint8Array().toBase64();
  },
  toUint8Array: function() {
    return new Uint8Array(this);
  },
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
  // ====== Relational ======
  assoc: function(id, prop, assoc = {}) {
    const ids = this.unique0(v => v[id]);
    const o = ids.length == 0 ? {} : typeof assoc == 'function' ? assoc(ids) : assoc;
    return this.each0(v => v[prop] = o[v[id]] ?? null);
  },
  // ====== Tree ======
  toTree: function(o = {}) {
    const { id = 'id', pid = 'pid', level = 'level', root = 'root', parent = 'parent', children = 'children', empty = null, hasRoot = true } = o;
    const parents = this.reduce((a, c) => a.attr0(c[id], c), {}), childrens = this.reduce((a, c) => (a.attr0(c[pid], [], false).attr0(c[pid]).push0(c), a), {});
    const r = this.length && hasRoot ? this.find(v => v[pid] === 0) : { [id]: 0, [pid]: -1, [root]: null, [parent]: null, [children]: childrens[0] };
    d(r, { [root]: { value: r, enumerable: false, configurable: true, writable: true } });
    for (const v of this) {
      d(v, {
        [root]: { value: r, enumerable: false, configurable: true, writable: true },
        [parent]: { value: parents[v[pid]], enumerable: false, configurable: true, writable: true },
      });
      v[children] = childrens[v[id]] || empty;
    }
    r.treeEach0(v => v[level] = v[parent] ? v[parent][level] + 1 : 0, -1, children);
    return r;
  },
  tree2tree: function(o = {}, r = null, p = null) {
    const { id = 'id', pid = 'pid', level = 'level', root = 'root', parent = 'parent', children = 'children', empty = null } = o;
    r = r || { [id]: 0, [pid]: -1, [level]: 0, [root]: null, [parent]: null, [children]: this };
    p = p || r;
    for (const v of this) {
      d(v, {
        [root]: { value: r, enumerable: false, configurable: true, writable: true },
        [parent]: { value: p, enumerable: false, configurable: true, writable: true },
      });
      v[pid] = p[id];
      v[level] = p[level] + 1;
      v[children] = v[children] && v[children].length ? v[children] : empty;
      v[children]?.tree2tree(o, r, v);
    }
    return r;
  },
  treeFind0: function(cb, self = true, depth = -1, children = 'children') {
    for (const v of this) {
      const r = v.treeFind0(cb, self, depth, children);
      if (r !== null) { return r; }
    }
    return null;
  },
  treeEach0: function(cb, self = true, depth = -1, children = 'children') {
    for (const v of this) {
      v.treeEach0(cb, self, depth, children);
    }
    return this;
  },
  treeMap0: function(cb, self = true, depth = -1, children = 'children', empty = null) {
    return this.map(v => v.treeMap0(cb, self, depth, children, empty));
  },
});
