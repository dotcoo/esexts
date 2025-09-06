// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, adapterMethods } from './util';

d(Number.prototype, {
  ...adapterMethods(Math, ['ceil', 'ceil'], ['floor', 'floor'], ['trunc', 'trunc'], ['abs', 'abs'], ['max', 'max'], ['min', 'min']),
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
