// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

typeof Iterator != 'undefined' && d(Iterator.prototype, {
  toArray: function() {
    return Array.from(this);
  },
});
