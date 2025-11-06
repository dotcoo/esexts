// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, adapterMethods } from './util';

d(Number.prototype, {
  ...adapterMethods(Math, 1, null, ['ceil', 'ceil'], ['floor', 'floor'], ['trunc', 'trunc'], ['abs', 'abs'], ['max', 'max'], ['min', 'min']),
  round: function(precision = 0) {
    return Math.round(this * (10 ** precision)) / (10 ** precision);
  },
  add: function(v, ...args) {
    return typeof v == 'function' ? v(this, ...args) : this + v;
  },
  sub: function(v, ...args) {
    return typeof v == 'function' ? v(this, ...args) : this - v;
  },
  mul: function(v, ...args) {
    return typeof v == 'function' ? v(this, ...args) : this * v;
  },
  div: function(v, ...args) {
    return typeof v == 'function' ? v(this, ...args) : this / v;
  },
  baseConvert: function(base = 64) {
    let s = '', n = this, cs = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
    while (n > 0) {
      s = cs.at(n % base) + s;
      n = Math.floor(n / base);
    }
    return s ? s : '0';
  },
  unit: function(units, decimal = 0) {
    let n = this, u = '';
    for ([unit, size] of Object.entries(units)) {
      u = unit;
      if (size === 0 || n < size) { break; }
      n = n / size;
    }
    return decimal < 0 ? +n.toFixed(0-decimal) + u : n.toFixed(decimal) + u;
  },
  units: function(units, array = false) {
    let n = this, a = [];
    for ([unit, size] of Object.entries(units)) {
      if (size == 0 || n < size) {
        a.push([n, unit]);
        break;
      } else {
        a.push([n % size, unit]);
        n = Math.floor(n / size);
      }
    }
    return array ? a : a.reverse().map(([n, u]) => n + u).join('');
  },
  toFixed0: function(decimal = 0) {
    return +this.toFixed(decimal);
  },
  toDate: function() {
    return Date.new(this);
  },
});
