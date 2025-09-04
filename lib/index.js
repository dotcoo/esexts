// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

// ====== 压缩 ======

const d = (prototype, properties) => Object.defineProperties(prototype, Object.fromEntries(Object.keys(properties).map(key => [key, { value: properties[key], enumerable: false, configurable: true, writable: true }])));

// ====== 生成 ======

function staticNew() {
  return {
    new: function(...args) {
      return new this(...args);
    },
  };
}

function returnThis(...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = function(...args) {
      this[m](...args);
      return this;
    };
  }
  return defines;
}

function returnArgs0(...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = function(...args) {
      this[m](...args);
      return args[0];
    };
  }
  return defines;
}

function returnArgs(...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = function(...args) {
      this[m](...args);
      return args;
    };
  }
  return defines;
}

function propAlias(...props) {
  const defines = {};
  for (const prop of props) {
    const [p, n] = Array.isArray(prop) ? prop : [prop, prop];
    defines[n] = function() {
      return this[p];
    };
  }
  return defines;
}

// function methodAlias(...methods) {
//   const defines = {};
//   for (const method of methods) {
//     const [m, n] = Array.isArray(method) ? method : [method, method];
//     defines[n] = function(...args) {
//       return this[m](...args);
//     };
//   }
//   return defines;
// }

function methodAliasIterator(...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = function(...args) {
      return [...this[m](...args)];
    };
  }
  return defines;
}

function methodExtends(obj, ...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = obj[m];
  }
  return defines;
}

function methodAdapter(obj, ...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = function(...args) {
      return obj[m](this, ...args);
    };
  }
  return defines;
}

function methodAdapterReturnThis(obj, ...methods) {
  const defines = {};
  for (const method of methods) {
    const [m, n] = Array.isArray(method) ? method : [method, method];
    defines[n] = function(...args) {
      obj[m](this, ...args);
      return this;
    };
  }
  return defines;
}

// ====== 扩展 ======

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
  ...methodAdapter(Object, ['entries','entries0'], ['keys','keys0'], ['values','values0']),
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
  attr0: function(name, ...args) {
    return typeof this != 'object' ? this : typeof name == 'function' ? name(this, ...args) : this[name];
  },
  toArray0: function() {
    return Array.isArray(this) ? this : [this];
  },
  ...methodAdapterReturnThis(console, ['debug', 'debug0'], ['log', 'log0'], ['info', 'info0'], ['warn', 'warn0'], ['error', 'error0'], ['dir', 'dir0']),
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

d(Number.prototype, {
  ...methodAdapter(Math, 'ceil', 'floor', 'trunc', 'abs', 'max', 'min'),
  baseConvert: function(base = 64) {
    let s = '', n = this, cs = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    while (n > 0) {
      s = cs.at(n % base) + s;
      n = Math.floor(n / base);
    }
    return s ? s : '0';
  },
  round: function(precision = 0) {
    return precision == 0 ? Math.round(this) : Math.round(this * 10 ** precision) / 10 ** precision;
  },
  toFixed0: function(...args) {
    return +this.toFixed(...args);
  },
  toDate: function() {
    return Date.new(this);
  },
});

d(BigInt.prototype, {
  toJSON: function() {
    return this < BigInt(Number.MIN_SAFE_INTEGER) || this > BigInt(Number.MAX_SAFE_INTEGER) ? this.toString() : Number(this);
  },
});

d(String.prototype, {
  ...propAlias(['length', 'length0']),
  substring0: function(s = 0, e = this.length) {
    s = s >= 0 ? s : this.length + s;
    e = e >= 0 ? e : this.length + e;
    return this.substring(s, e);
  },
  substr0: function(s = 0, e = this.length) {
    s = s >= 0 ? s : this.length + s;
    e = s + e;
    return this.substring(s, e);
  },
  split0: function(s = ',', n = -1) {
    const a = this ? this.split(s) : [];
    return n === -1 ? a : a.push0(a.splice(n-1).join(s));
  },
  splitNumber: function(s = ',') {
    return this.split0(s).map(v => +v);
  },
  splitSegment: function(n = 1) {
    const a = [];
    for (let i = 0; i < this.length; i += n) {
      a.push(this.substring(i, i+n));
    }
    return a;
  },
  sprintf: function(...args) {
    let [s, ...f] = this.split(/%[sd]/);
    for (let i=0; i < f.length; i++) {
      s += args[i]+f[i];
    }
    return s;
  },
  subOf: function(begin, end, n = 0, position = 0) {
    for (let i = 0; i < n && position != -1; i++, position++) { position = this.indexOf(begin, position); }
    let b = this.indexOf(begin, position);
    let e = this.indexOf(end, b);
    if (b == -1 || e == -1) { return ''; }
    b += begin.length;
    return this.substring(b, e);
  },
  lastSubOf: function(begin, end, n = 0, position = Infinity) {
    for (let i = 0; i < n && position != -1; i++, position--) { position = this.lastIndexOf(begin, position); }
    let b = this.lastIndexOf(begin, position);
    let e = this.indexOf(end, b);
    if (b == -1 || e == -1) { return ''; }
    b += begin.length;
    return this.substring(b, e);
  },
  camel2under: function() {
    return this.substr(0, 1) + this.substr(1).replace(/([A-Z])/g, (_, v) => '_' + v.toLowerCase());
  },
  under2camel: function() {
    return this.replace(/_([a-z])/g, (_, v) => v.toUpperCase());
  },
  camel2pascal: function() {
    return this.substr(0, 1).toUpperCase() + this.substr(1);
  },
  pascal2camel: function() {
    return this.substr(0, 1).toLowerCase() + this.substr(1);
  },
  under2kebab: function() {
    return this.replace(/_/g, '-');
  },
  kebab2under: function() {
    return this.replace(/-/g, '_');
  },
  baseConvert: function(base = 64) {
    let n = 0, cs = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    for (let i = 0; i < this.length; i++) {
      n = n * base + cs.indexOf(this.at(i));
    }
    return n;
  },
  toFixed0: function(...args) {
    return +(+this).toFixed(...args);
  },
  toDate: function() {
    return Date.new(this);
  },
  hex2bytes: function() {
    const bytes = [];
    for (let i = 0; i < this.length; i += 2) {
      bytes.push(Number.parseInt(this.substring(i, i+2), 16));
    }
    return bytes;
  },
  string2bytes: function() {
    if (typeof TextEncoder != 'undefined') { return Array.from(new TextEncoder().encode(this)); }
    const bytes = [], e = encodeURIComponent(this);
    for (let i = 0; i < e.length;) {
      bytes.push(e.charAt(i) == '%' ? Number.parseInt(e.substring(i+1, i+=3), 16) : e.charCodeAt(i++));
    }
    return bytes;
  },
  base64decode: function(url) {
    const bytes = [], maps = {}, chars = url === true ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (let i = 0; i < chars.length; i++) { maps[chars.charAt(i)] = i; }
    const l =  this.charAt(this.length - 1) != '=' ? this.length : this.charAt(this.length - 2) != '=' ? this.length - 1 : this.length - 2;
    for (let i = 3; i < l; i += 4) {
      const n = (maps[this.charAt(i-3)] << 18) + (maps[this.charAt(i-2)] << 12) + (maps[this.charAt(i-1)] << 6) + maps[this.charAt(i)];
      bytes.push((n & 0xFF0000) >> 16, (n & 0xFF00) >> 8, n & 0xFF);
    }
    if (l % 4 == 3) {
      const n = (maps[this.charAt(l-3)] << 18) + (maps[this.charAt(l-2)] << 12) + (maps[this.charAt(l-1)] << 6);
      bytes.push((n & 0xFF0000) >> 16, (n & 0xFF00) >> 8);
    } else if (l % 4 == 2) {
      const n = (maps[this.charAt(l-2)] << 18) + (maps[this.charAt(l-1)] << 12);
      bytes.push((n & 0xFF0000) >> 16);
    }
    return bytes;
  },
});

typeof Iterator != 'undefined' && d(Iterator.prototype, {
  toArray: function() {
    return Array.from(this);
  },
});

d(Array, {
  ...staticNew(),
});

d(Array.prototype, {
  ...propAlias(['length', 'length0']),
  ...methodAliasIterator(['entries', 'entries0'], ['keys', 'keys0'], ['values', 'values0']),
  ...returnThis(['push', 'push0'], ['pop', 'pop0'], ['shift', 'shift0'], ['unshift', 'unshift0']),
  ...returnArgs0(['push', 'push1'], ['unshift', 'unshift1']),
  ...returnArgs(['push', 'push3'], ['unshift', 'unshift3']),
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
  ...returnThis(['forEach', 'each0']),
  toObject: function(cb = (v, i) => [i, v]) {
    return Object.fromEntries(this.map(cb));
  },
  toMap: function(cb = (v, i) => [i, v]) {
    return new Map(this.map(cb));
  },
  toSet: function(cb = v => v) {
    return new Set(this.map(cb));
  },
  toGroup: function(cb = v => [v.id, v]) {
    const o = {};
    for (const e of this) {
      const [k, v] = cb(e);
      if (!(k in o)) { o[k] = []; }
      o[k].push(v);
    }
    return o;
  },
  toMerge: function(key = v => v.id, create = v => ({ ...v, children: [] }), append = (o, v) => o.children.push(v)) {
    const l = [];
    for (const v of this) {
      append(l.find(a => key(a) == key(v)) ?? l.push1(create(v)), v);
    }
    return l;
  },
  bytes2hex: function() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += (this[i] < 16 ? '0' : '') + this[i].toString(16);
    }
    return s;
  },
  bytes2string: function() {
    if (typeof TextDecoder != 'undefined') { return new TextDecoder().decode(new Uint8Array(this)); }
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += '%' + (this[i] < 16 ? '0' : '') + this[i].toString(16);
    }
    return decodeURIComponent(s);
  },
  base64encode: function(url = false, equal = true) {
    let b64 = '', maps = {}, chars = url === true ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (let i = 0; i < chars.length; i++) { maps[chars.charAt(i)] = i; }
    for (let i = 2; i < this.length; i += 3) {
      const n = (this[i-2] << 16) + (this[i-1] << 8) + this[i];
      b64 += chars.charAt((n & 0xFC0000) >> 18) + chars.charAt((n & 0x3F000) >> 12) + chars.charAt((n & 0xFC0) >> 6) + chars.charAt(n & 0x3F);
    }
    if (this.length % 3 == 2) {
      const n = (this[this.length-2] << 16) + (this[this.length-1] << 8);
      b64 += chars.charAt((n & 0xFC0000) >> 18) + chars.charAt((n & 0x3F000) >> 12) + chars.charAt((n & 0xFC0) >> 6) + (equal === false ? '' : '=');
    } else if (this.length % 3 == 1) {
      const n = this[this.length-1] << 16;
      b64 += chars.charAt((n & 0xFC0000) >> 18) + chars.charAt((n & 0x3F000) >> 12) + (equal === false ? '' : '==');
    }
    return b64;
  },
  toUint8Array: function() {
    return new Uint8Array(this);
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
    const parents = this.toObject(v => [v[id], v]), childrens = this.toGroup(v => [v[pid], v]);
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

d(ArrayBuffer.prototype, {
  toUint8Array: function() {
    return new Uint8Array(this);
  },
});

d(Uint8Array.prototype, {
  ...methodExtends(Array.prototype, 'bytes2hex', 'bytes2string', 'base64encode'),
  toArray: function() {
    return new Array(...this);
  },
});

d(Map, {
  ...staticNew(),
});

d(Map.prototype, {
  ...propAlias(['size', 'length0']),
  ...methodAliasIterator(['entries', 'entries0'], ['keys', 'keys0'], ['values', 'values0']),
  ...returnThis(['set', 'set0'], ['delete', 'delete0']),
  ...returnArgs(['set', 'set3']),
  get0: function(key, defval = null) {
    return this.has(key) ? this.get(key) : defval;
  },
  get1: function(key, updater, ...args) {
    return this.has(key) ? this.get(key) : this.set3(key, updater(key, ...args))[1];
  },
  getAsync1: async function(key, updater, ...args) {
    return this.has(key) ? this.get(key) : this.set3(key, await updater(key, ...args))[1];
  },
  toObject: function() {
    return Object.fromEntries(this);
  },
  toArray: function() {
    return [...this];
  },
  toJSON: function() {
    return [...this];
  },
});

d(Set, {
  ...staticNew(),
});

d(Set.prototype, {
  ...propAlias(['size', 'length0']),
  ...methodAliasIterator(['entries', 'entries0'], ['keys', 'keys0'], ['values', 'values0']),
  ...returnThis(['add', 'add0'], ['delete', 'delete0']),
  ...returnArgs(['add', 'add3']),
  toArray: function() {
    return [...this];
  },
  toJSON: function() {
    return [...this];
  },
});

d(Date, {
  new: function(...args) {
    return args.length != 1 ? new Date(...args) : Number.isNaN(+args[0]) ? new Date(args[0].includes('T') ? args[0] : args[0].replace(/-/g, '/')) : new Date(args[0]>2500000000 ? args[0] : args[0]*1000);
  },
  format: function(format = 'y-m-d h:i:s') {
    return new Date().format(format);
  },
  unix: function() {
    return this.now() / 1000 | 0;
  },
  fromUnix: function(time = 0) {
    return new Date((time || 0) * 1000);
  },
  expr: function(opts = {}) {
    return new Date().expr(opts);
  },
  toDayRange: function() {
    const n = new Date();
    const y = n.getFullYear();
    const m = n.getMonth();
    const d = n.getDate();
    const begin = new Date(y, m, d).getTime() / 1000 | 0;
    return [begin, begin + 86400 -1];
  },
  toWeekRange: function() {
    let n = new Date();
    while (n.getDay() != 1) {
      n = new Date(n.getTime() - 86400);
    }
    const y = n.getFullYear();
    const m = n.getMonth();
    const d = n.getDate();
    const begin = new Date(y, m, d).getTime() / 1000 | 0;
    return [begin, begin + 86400 * 7 - 1];
  },
  toMonthRange: function() {
    const n = new Date();
    const y = n.getFullYear();
    const m = n.getMonth();
    const begin = new Date(y, m, 1).getTime() / 1000 | 0;
    const end = new Date(y, m+1, 0, 23, 59, 59).getTime() / 1000 | 0;
    return [begin, end];
  },
  toYearRange: function() {
    const n = new Date();
    const y = n.getFullYear();
    const begin = new Date(y, 1, 1).getTime() / 1000 | 0;
    const end = new Date(y+1, 1, 0, 23, 59, 59).getTime() / 1000 | 0;
    return [begin, end];
  },
});

d(Date.prototype, {
  format: function(format = 'y-m-d h:i:s') {
    if (this.getTime() === 0) { return '-'; }
    const date = {
      y: this.getFullYear(),
      m: (this.getMonth() + 1),
      d: this.getDate(),
      h: this.getHours(),
      i: this.getMinutes(),
      s: this.getSeconds(),
      l: this.getMilliseconds(),
      e: this.getMonthDay(),
    };
    return format.replace(/([ymdhisle])/ig, (match, key) => key>='A'&&key<='Z' ? date[key.toLowerCase()] : date[key].toString().padStart(key==='l'?3:2, '0'));
  },
  unix: function() {
    return this.getTime() / 1000 | 0;
  },
  isLeapYear: function() {
    return this.getFullYear() % 4 === 0 && this.getFullYear() % 400 !== 0;
  },
  getMonthDay: function() {
    // return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    return [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()] || (this.isLeapYear() ? 29 : 28);
  },
  expr: function({ y = 0, m = 0, d = 0, h = 0, i = 0, s = 0 }) {
    const mDate = new Date(this.getFullYear() + y, this.getMonth() + m + 1, 0);
    return new Date(this.getFullYear() + y, this.getMonth() + m, Math.min(mDate.getDate(), this.getDate()) + d, this.getHours() + h, this.getMinutes() + i, this.getSeconds() + s);
  },
  begin: function(n = 3) {
    return new Date(...[this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds()].slice(0, n), ...[this.getFullYear(), 0, 1, 0, 0, 0].slice(n));
  },
  end: function(n = 3) {
    return new Date(...[this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds()].slice(0, n), ...[this.getFullYear(), 11, n<2?31:this.getMonthDay(), 23, 59, 59].slice(n));
  },
  week: function(n, dir = 1) {
    let d = new Date(this.getTime());
    while (d.getDay() !== n) {
      d = new Date(d.getTime() + 86400000 * dir);
    }
    return d;
  },
  toJSON: function() {
    return this.getTime();
  },
});

d(RegExp, {
  ...staticNew(),
});

d(RegExp.prototype, {
  toJSON: function() {
    return this.toString();
  },
});

if (typeof Promise.withResolvers == 'undefined') {
  d(Promise, {
    withResolvers: function() {
      let resolve = null, reject = null, promise = new this((res, rej) => { resolve = res; reject = rej; });
      return { promise, resolve, reject };
    },
  });
}

d(Promise, {
  channel: function() {
    let resolve = null, reject = null, promise = new this((res, rej) => { resolve = res; reject = rej; });
    return [promise, resolve, reject];
  },
});

d(Promise.prototype, {
  tryCatch: function() {
    return new Promise(resolve => this.then(res => resolve([res, null])).catch(err => resolve([null, err])));
  },
});

d(JSON, {
  parse0: function(v, defval = null) {
    try {
      if (typeof v != 'string') { throw new Error('not string'); }
      return JSON.parse(v);
    } catch(e) {
      return defval;
    }
  },
});

let prefix = '', incridIncr = 0, uniqidIncr = 0, uniqidNow = 0;

d(Math, {
  prefix: function(v = null) {
    return prefix = v ?? prefix;
  },
  cookieSet: function(name, value, o = { Path: '/' }) {
    let s = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    s += o.Expires ? `; Expires=${o.Expires.toGMTString()}` : '';
    s += o.MaxAge ? `; Max-Age=${o.MaxAge}` : '';
    s += o.Domain ? `; Domain=${o.Domain}` : '';
    s += o.Path ? `; Path=${o.Path}` : '';
    s += o.SameSite ? `; SameSite=${o.SameSite}` : '';
    s += o.Partitioned ? `; Partitioned` : '';
    s += o.HttpOnly ? `; HttpOnly` : '';
    s += o.Secure ? `; Secure` : '';
    document.cookie = s;
  },
  cookieGet: function(name = null) {
    const cookies = document.cookie == '' ? {} : Object.fromEntries(document.cookie.split('; ').map(v => v.split('=').map(decodeURIComponent)));
    return name ? cookies[name] : cookies;
  },
  cookieRemove: function(name) {
    document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/`;
  },
  cookieClear: function(...omits) {
    const cookies = Math.cookieGet();
    for (const name in cookies) {
      if (omits.includes(name)) { continue; }
      Math.cookieRemove(name);
    }
  },
  localSet: function(name, value) {
    return localStorage.setItem(prefix + name, JSON.stringify(value)) || value;
  },
  localGet: function(name, defval = null) {
    try {
      return prefix + name in localStorage ? JSON.parse(localStorage.getItem(prefix + name)) : defval;
    } catch (e) {
      return defval;
    }
  },
  localSetString: function(name, value) {
    return localStorage.setItem(prefix + name, value) || value;
  },
  localGetString: function(name, defval = '') {
    return prefix + name in localStorage ? localStorage.getItem(prefix + name) : defval;
  },
  localRemove: function(...names) {
    for (const name of names) {
      localStorage.removeItem(prefix + name);
    }
  },
  localClear: function(...omits) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key.startsWith(prefix) || omits.includes(key.substring(prefix.length))) { continue; }
      localStorage.removeItem(key);
    }
  },
  sessionSet: function(name, value) {
    return sessionStorage.setItem(prefix + name, JSON.stringify(value)) || value;
  },
  sessionGet: function(name, defval = null) {
    try {
      return prefix + name in sessionStorage ? JSON.parse(sessionStorage.getItem(prefix + name)) : defval;
    } catch (e) {
      return defval;
    }
  },
  sessionSetString: function(name, value) {
    return sessionStorage.setItem(prefix + name, value) || value;
  },
  sessionGetString: function(name, defval = '') {
    return prefix + name in sessionStorage ? sessionStorage.getItem(prefix + name) : defval;
  },
  sessionRemove: function(...names) {
    for (const name of names) {
      sessionStorage.removeItem(prefix + name);
    }
  },
  sessionClear: function(...omits) {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (!key.startsWith(prefix) || omits.includes(key.substring(prefix.length))) { continue; }
      sessionStorage.removeItem(key);
    }
  },
  randstr: function(len = 16, slen = 0, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', schars='~!@#$%^&*()_+`{}|[]\\:";\'<>,.?/') {
    if (len < slen) { throw new Error('randstr: len < slen'); }
    const strs = [];
    for (let i = 0; i < len; i++) {
      strs.push(chars.charAt(Math.random() * chars.length | 0));
    }
    for (let sj = new Set(), j = 0, i = 0; i < slen; i++) {
      do {
        j = Math.random() * len | 0;
      } while (sj.has(j));
      sj.set(j, true);
      strs[j] = schars.charAt(Math.random() * schars.length | 0);
    }
    return strs.join('');
  },
  randint: function(min = 0, max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  incrid: function() {
    return ++incridIncr;
  },
  incrstr: function() {
    return '' + Math.incrid();
  },
  uniqid: function(now = Date.now()) {
    return now === uniqidNow ? now * 0x800 + ++uniqidIncr % 0x800 : (uniqidNow = now) * 0x800 + (uniqidIncr = 0) % 0x800;
  },
  uniqstr: function() {
    return '' + Math.uniqid()
  },
  filesize: function(size, decimal = 2) {
    const u = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let i = Math.log(size) / Math.log(1024) | 0;
    i = i < u.length ? i : u.length - 1;
    return (size / Math.pow(1024, i)).toFixed(decimal) - 0 + u[i];
  },
  sleep: function(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  },
  useTemplate: function(name) {
    let r = null;
    const template  = { setup(_, { slots }) { r = slots.default; return () => {}; }, name: name + 'Template' };
    const component = { setup(_, { attrs }) { return () => r?.(attrs); }, name };
    return { [template.name]: template, [component.name]: component };
  },
});
