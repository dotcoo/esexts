// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

import { URL } from '../lib/URL.js'

// ====== URL ======

const url = new URL('https://dotcoo:123456@blog.dotcoo.com:8443/blog/1?a=1&b=2#dotcoo');

// URL.new

// console.assert(JSON.stringify(url) === '[]', 'error');

// URL.parse
console.assert(url.protocol === 'https:', 'error');
console.assert(url.username === 'dotcoo', 'error');
console.assert(url.password === '123456', 'error');
console.assert(url.host === 'blog.dotcoo.com:8443', 'error');
console.assert(url.hostname === 'blog.dotcoo.com', 'error');
console.assert(url.port === '8443', 'error');
console.assert(url.pathname === '/blog/1', 'error');
console.assert(url.search === '?a=1&b=2', 'error');
console.assert(url.hash === '#dotcoo', 'error');

// URL.get

// console.assert(url.get('a') === 1, 'error');
// console.assert(url.get('b') === 2, 'error');
