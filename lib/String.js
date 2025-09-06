// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, propAlias } from './util';

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
  string2bytes: function() {
    return new TextEncoder().encode(this);
  },
  hex2bytes: function() {
    return Uint8Array.fromHex(this);
  },
  base64decode: function() {
    return Uint8Array.fromBase64(this);
  },
});
