// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

import { TextDecoder } from '../lib/TextDecoder.js'

// ====== TextDecoder ======

const decoder = new TextDecoder().decode([97,  98,  99, 100, 101, 102, 103]);

console.assert(decoder === 'abcdefg', 'error');
