// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, adapterProps, iteratorMethods, adapterMethods } from './util';

d(Set, {
  ...staticNew(),
});

d(Set.prototype, {
  ...adapterProps(['size', 'length$']),
  ...iteratorMethods(Set.prototype, 'entries', 'keys', 'values'),
  ...adapterMethods(Set.prototype, null, 't', 'add', 'delete'),
  ...adapterMethods(Set.prototype, null, 'a', 'add', 'delete'),
  ...adapterMethods(Set.prototype, null, 0, 'add', 'delete'),
  toArray: function() {
    return [...this];
  },
  toJSON: function() {
    return [...this];
  },
});
