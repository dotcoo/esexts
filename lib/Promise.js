// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

d(Promise, {
  channel: function() {
    let resolve = null, reject = null, promise = new this((res, rej) => { resolve = res; reject = rej; });
    return [promise, resolve, reject];
  },
});

d(Promise.prototype, {
  tryCatch: function() {
    return new Promise(resolve => this.then(res => resolve([res, null])).catch(err => resolve([null, err])));
  },
});
