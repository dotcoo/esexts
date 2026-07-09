// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

import { TextEncoder } from '../lib/TextEncoder.js'

// ====== TextEncoder ======

const encoder = new TextEncoder().encode('abcdefg');

console.assert(JSON.stringify([...encoder]) === '[97,98,99,100,101,102,103]', 'error');
