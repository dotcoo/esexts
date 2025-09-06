// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew, propAlias, methodAliasIterator, returnThis, returnArgs } from './util';

d(Set, {
  ...staticNew(),
});

d(Set.prototype, {
  ...propAlias(['size', 'length0']),
  ...methodAliasIterator(['entries', 'entries0'], ['keys', 'keys0'], ['values', 'values0']),
  ...returnThis(['add', 'add0'], ['delete', 'delete0']),
  ...returnArgs(['add', 'add3']),
  toArray: function() {
    return [...this];
  },
  toJSON: function() {
    return [...this];
  },
});
