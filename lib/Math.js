// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

let incridIncr = 0, uniqidIncr = 0, uniqidNow = 0;

d(Math, {
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
