// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps } from './util';

d(String.prototype, {
  ...staticNew(),
  ...adapterProps(['length', 'length$']),
  substring$: function(s = 0, e = this.length) {
    s = s >= 0 ? s : this.length + s;
    e = e >= 0 ? e : this.length + e;
    return this.substring(s, e);
  },
  substr$: function(s = 0, e = this.length) {
    s = s >= 0 ? s : this.length + s;
    e = s + e;
    return this.substring(s, e);
  },
  split$: function(s = ',', n = -1) {
    const a = this ? this.split(s) : [];
    return n === -1 ? a : a.push$t(a.splice(n-1).join(s));
  },
  split$number: function(s = ',') {
    return this.split$(s).map(v => +v);
  },
  split$segment: function(n = 1) {
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
  fixed: function(...args) {
    return +(+this).toFixed(...args);
  },
  toDate: function() {
    return Date.new(this);
  },
  // ====== Uint8Array ======
  toUint8Array: function() {
    return new TextEncoder().encode(this);
  },
  // ====== hex ======
  hexencode: function() {
    return new TextEncoder().encode(this).toHex();
  },
  hexdecode: function() {
    return new TextDecoder().decode(Uint8Array.fromHex(this));
  },
  // ====== base64 ======
  base64encode: function() {
    return new TextEncoder().encode(this).toBase64();
  },
  base64decode: function() {
    return new TextDecoder().decode(Uint8Array.fromBase64(this));
  },
});
