// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, propAlias, methodAliasIterator, returnThis, returnArgs } from './util';

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
