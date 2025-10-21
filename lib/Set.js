// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps, iteratorMethods, adapterMethods } from './util';

d(Set, {
  ...staticNew(),
});

d(Set.prototype, {
  ...adapterProps(['size', 'length0']),
  ...iteratorMethods(Set.prototype, ['entries', 'entries0'], ['keys', 'keys0'], ['values', 'values0']),
  ...adapterMethods(Set.prototype, null, false, ['add', 'add0'], ['delete', 'delete0']),
  ...adapterMethods(Set.prototype, null, 1, ['add', 'add1'], ['delete', 'delete1']),
  ...adapterMethods(Set.prototype, null, true, ['add', 'add3'], ['delete', 'delete3']),
  toArray: function() {
    return [...this];
  },
  toJSON: function() {
    return [...this];
  },
});
