// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d } from './util';

d(JSON, {
  parse0: function(v, defval = null) {
    try {
      if (typeof v != 'string') { throw new Error('not string'); }
      return JSON.parse(v);
    } catch(e) {
      return defval;
    }
  },
});
