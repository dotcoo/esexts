// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

d(BigInt.prototype, {
  toJSON: function() {
    return this < BigInt(Number.MIN_SAFE_INTEGER) || this > BigInt(Number.MAX_SAFE_INTEGER) ? this.toString() : Number(this);
  },
});
