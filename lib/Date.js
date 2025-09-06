// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

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
