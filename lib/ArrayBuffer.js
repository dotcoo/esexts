// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

d(ArrayBuffer.prototype, {
  toUint8Array: function() {
    return new Uint8Array(this);
  },
});
