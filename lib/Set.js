// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps, iteratorMethods, adapterMethods } from './util';

d(Set, {
  ...staticNew(),
});

d(Set.prototype, {
  ...adapterProps(['size', '$length']),
  ...iteratorMethods(Set.prototype, 'entries', 'keys', 'values'),
  ...adapterMethods(Set.prototype, null, 't', ['add', '$add'], ['delete', '$delete']),
  ...adapterMethods(Set.prototype, null, 'a', 'add', 'delete'),
  ...adapterMethods(Set.prototype, null, 0, 'add', 'delete'),
  $union: function (s) {
    return new Set([...this, ...s]);
  },
  $intersection: function(s) {
    return new Set([...this].filter(v => s.has(v)));
  },
  $difference: function (s) {
    return new Set([...this].filter(v => !s.has(v)));
  },
  $symmetricDifference: function(s) {
    return new Set([...[...this].filter(v => !s.has(v)), ...[...s].filter(v => !this.has(v))]);
  },
  toArray: function() {
    return [...this];
  },
  toJSON: function() {
    return [...this];
  },
});

if (typeof Set.prototype.union == 'undefined') {
  Set.prototype.union = Set.prototype.$union;
  Set.prototype.intersection = Set.prototype.$intersection;
  Set.prototype.difference = Set.prototype.$difference;
  Set.prototype.symmetricDifference = Set.prototype.$symmetricDifference;
}
