// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterMethods } from './util';

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
  ...staticNew(),
  isObject: function(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
  },
  merge: function(...args) {
    return ObjectMerge(this, ...args)
  },
  concat: function(...args) {
    return ObjectConcat(this, ...args);
  },
});

d(Object.prototype, {
  $clone: function() {
    return JSON.parse(JSON.stringify(this));
  },
  $length: function() {
    return Object.keys(this).length;
  },
  ...adapterMethods(Object, 0, '', 'entries', 'keys', 'values', 'assign'),
  ...adapterMethods(JSON, 0, '', 'stringify'),
  $merge: function(...args) {
    return ObjectMerge(this, ...args);
  },
  $concat: function(...args) {
    return ObjectConcat(this, ...args);
  },
  $empty: function() {
    return Object.keys(this).length == 0;
  },
  $has: function(key) {
    return key in this;
  },
  $pick: function(...keys) {
    const o = {};
    for (const k of keys) {
      o[k] = this[k];
    }
    return o;
  },
  $omit: function(...keys) {
    const o = {}, s = new Set(keys);
    for (const k in this) {
      if (!s.has(k)) { o[k] = this[k]; }
    }
    return o;
  },
  $attr: function(...args) {
    if (typeof this != 'object') { return this; }
    const [key, val, o, def] = args;
    if (args.length == 1) {
      return this[key];
    } else if (args.length == 2) {
      this[key] = val;
      return this;
    } else if (typeof o == 'boolean') {
      if ((key in this) === o) { this[key] = val; }
      return this;
    } else if (o == 'define' || o === null) {
      return Object.defineProperty(this, key, { value: val, enumerable: false, configurable: true, writable: true, ...def });
    } else if (o === '+') {
      this[key] = (this[key] ?? def ?? 0) + val;
      return this;
    } else if (o === '-') {
      this[key] = (this[key] ?? def ?? 0) - val;
      return this;
    } else if (o === '*') {
      this[key] = (this[key] ?? def ?? 0) * val;
      return this;
    } else if (o === '/') {
      this[key] = (this[key] ?? def ?? 0) / val;
      return this;
    } else {
      return this;
    }
  },
  $pipe: function(pipe, ...args) {
    return pipe(this, ...args);
  },
  $tee: function(tee, ...args) {
    return tee(this, ...args), this;
  },
  $toArray: function() {
    return Array.isArray(this) ? this : [this];
  },
  ...adapterMethods(console, -1, 't', ['debug', '$debug'], ['log', '$log'], ['info', '$info'], ['warn', '$warn'], ['error', '$error'], ['dir', '$dir']),
  $debugger: function(...args) {
    console.debug(this, ...args);
    debugger;
    return this;
  },
  // ====== Tree ======
  $getParents: function(self = false, depth = -1, parent = 'parent') {
    const ps = self ? [this] : [];
    let p = this[parent];
    while (p && depth-- != 0) {
      ps.push(p);
      p = p[parent];
    }
    return ps;
  },
  $getChildrens: function(self = false, depth = -1, children = 'children') {
    const cs = [];
    const recursion = (that, self, depth) => {
      if (self) { cs.push(that); }
      if (depth == 0 || !that[children] || that[children].length == 0) { return; }
      for (const v of that[children]) { recursion(v, true, depth - 1); }
    }
    recursion(this, self, depth);
    return cs;
  },
  $tree$find: function(cb, self = true, depth = -1, children = 'children') {
    if (self && cb(this)) { return this; }
    if (depth == 0 || !this[children] || this[children].length == 0) { return null; }
    for (const v of this[children]) {
      const o = v.$tree$find(cb, true, depth - 1, children);
      if (o !== null) { return o; }
    }
    return null;
  },
  $tree$each: function(cb, self = true, depth = -1, children = 'children') {
    if (self) { cb(this); }
    if (depth == 0 || !this[children] || this[children].length == 0) { return; }
    for (const v of this[children]) { v.$tree$each(cb, true, depth - 1, children); }
    return this;
  },
  $tree$map: function(cb, self = true, depth = -1, children = 'children', empty = null) {
    const n = self ? cb(this) : this, nc = [];
    if (depth == 0 || !this[children] || this[children].length == 0) { return n; }
    for (const v of this[children]) { nc.push(v.$tree$map(cb, true, depth - 1, children, empty)); }
    n[children] = nc;
    return n;
  },
});
