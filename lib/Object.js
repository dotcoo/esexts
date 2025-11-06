// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, adapterMethods } from './util';

function ObjectAssign(o = { array: false }) {
  return function(a = {}, ...args) {
    const merge = (a, b) => {
      const at = Object.prototype.toString.call(a), bt = Object.prototype.toString.call(b);
      if (at !== bt) {
        return b;
      } else if (at === '[object Array]') {
        return o.array ? a.concat(...b) : b;
      } else if (at === '[object Object]') {
        for (const k in b) {
          a[k] = merge(a[k], b[k]);
        }
        return a;
      } else {
        return b;
      }
    };
    for (const b of args) {
      a = merge(a, b);
    }
    return a;
  };
}

const ObjectMerge = ObjectAssign({ array: false });
const ObjectConcat = ObjectAssign({ array: true });

d(Object, {
  isObject: function(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  },
  merge0: function(...args) {
    return ObjectMerge(this, ...args)
  },
  concat0: function(...args) {
    return ObjectConcat(this, ...args);
  },
});

d(Object.prototype, {
  clone0: function() {
    return JSON.parse(JSON.stringify(this));
  },
  length0: function() {
    return Object.keys(this).length;
  },
  ...adapterMethods(Object, 1, null, ['entries','entries0'], ['keys','keys0'], ['values','values0'], ['assign','assign0']),
  merge0: function(...args) {
    return ObjectMerge(this, ...args);
  },
  concat0: function(...args) {
    return ObjectConcat(this, ...args);
  },
  map0: function(cb = (k, v, i) => [k, v], i = 0) {
    return Object.entries(this).map(([k, v]) => cb(k, v, i++));
  },
  pick0: function(...keys) {
    const o = {};
    for (const k of keys) {
      o[k] = this[k];
    }
    return o;
  },
  omit0: function(...keys) {
    const o = {}, s = new Set(keys);
    for (const k in this) {
      if (!s.has(k)) { o[k] = this[k]; }
    }
    return o;
  },
  empty0: function(...keys) {
    return Object.keys(this).length == 0;
  },
  attr0: function(name, ...args) {
    return typeof this != 'object' ? this : typeof name == 'function' ? name(this, ...args) : args.length > 0 ? ((args[1] === undefined || args[1] === (name in this)) && (this[name] = args[0]), this) : this[name];
  },
  toArray0: function() {
    return Array.isArray(this) ? this : [this];
  },
  ...adapterMethods(console, -1, false, ['debug', 'debug0'], ['log', 'log0'], ['info', 'info0'], ['warn', 'warn0'], ['error', 'error0'], ['dir', 'dir0']),
  debugger0: function(...args) {
    args.push(this);
    console.debug(...args);
    debugger;
    return this;
  },
  // ====== Tree ======
  getParents0: function(self = false, depth = -1, parent = 'parent') {
    const ps = self ? [this] : [];
    let p = this[parent];
    while (p && depth-- != 0) {
      ps.push(p);
      p = p[parent];
    }
    return ps;
  },
  getChildrens0: function(self = false, depth = -1, children = 'children') {
    const cs = [];
    const recursion = (that, self, depth) => {
      if (self) { cs.push(that); }
      if (depth == 0 || !that[children] || that[children].length == 0) { return; }
      for (const v of that[children]) { recursion(v, true, depth - 1); }
    }
    recursion(this, self, depth);
    return cs;
  },
  treeFind0: function(cb, self = true, depth = -1, children = 'children') {
    if (self && cb(this)) { return this; }
    if (depth == 0 || !this[children] || this[children].length == 0) { return null; }
    for (const v of this[children]) {
      const o = v.treeFind0(cb, true, depth - 1, children);
      if (o !== null) { return o; }
    }
    return null;
  },
  treeEach0: function(cb, self = true, depth = -1, children = 'children') {
    if (self) { cb(this); }
    if (depth == 0 || !this[children] || this[children].length == 0) { return; }
    for (const v of this[children]) { v.treeEach0(cb, true, depth - 1, children); }
    return this;
  },
  treeMap0: function(cb, self = true, depth = -1, children = 'children', empty = null) {
    const n = self ? cb(this) : this, nc = [];
    if (depth == 0 || !this[children] || this[children].length == 0) { return n; }
    for (const v of this[children]) { nc.push(v.treeMap0(cb, true, depth - 1, children, empty)); }
    n[children] = nc;
    return n;
  },
});
