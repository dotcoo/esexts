// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

import { URLSearchParams } from '../lib/URLSearchParams.js'

// ====== URLSearchParams ======

const usp = new URLSearchParams();

// URLSearchParams.new

// console.assert(JSON.stringify(usp) === '[]', 'error');

// URLSearchParams.append
usp.append('a', 1);
usp.append('b', 2);
usp.append('c', 3);
usp.append('d', 4);
console.assert(usp.toString() === 'a=1&b=2&c=3&d=4', 'error');

// URLSearchParams.get

console.assert(usp.get('a') === 1, 'error');
console.assert(usp.get('b') === 2, 'error');
