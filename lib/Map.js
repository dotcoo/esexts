// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps, adapterMethods, iteratorMethods } from './util';

d(Map, {
  ...staticNew(),
});

d(Map.prototype, {
  ...adapterProps(['size', '$length']),
  ...iteratorMethods(Map.prototype, 'entries', 'keys', 'values'),
  ...adapterMethods(Map.prototype, null, 't', ['set', '$set'], ['delete', '$delete']),
  ...adapterMethods(Map.prototype, null, 'a', 'set', 'delete'),
  ...adapterMethods(Map.prototype, null, 0, 'set', 'delete'),
  ...adapterMethods(Map.prototype, null, 1, 'set', 'delete'),
  $getOrInsert: function(key, defval = null) {
    return this.has(key) ? this.get(key) : this.$set1(key, defval);
  },
  $getOrInsertComputed: function(key, callback) {
    return this.has(key) ? this.get(key) : this.$set1(key, callback(key));
  },
  $get: function(key, defval = null) {
    return this.has(key) ? this.get(key) : this.$set1(key, typeof defval == 'function' ? defval(key) : defval);
  },
  $get$async: async function(key, defval = null) {
    return this.has(key) ? this.get(key) : this.$set1(key, typeof defval == 'function' ? await defval(key) : defval);
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

if (typeof Map.prototype.getOrInsert == 'undefined') {
  Map.prototype.getOrInsert = Map.prototype.$getOrInsert;
  Map.prototype.getOrInsertComputed = Map.prototype.$getOrInsertComputed;
}
