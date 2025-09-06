// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew } from './util';

d(RegExp, {
  ...staticNew(),
});

d(RegExp.prototype, {
  toJSON: function() {
    return this.toString();
  },
});
