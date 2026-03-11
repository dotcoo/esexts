// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== LRU ======

const lru1 = LRU.new(3);

// LRU.new

console.assert(JSON.stringify(lru1) === '[]', 'error');

// LRU.set
lru1.set('a', 1);
lru1.set('b', 2);
lru1.set('c', 3);
lru1.set('d', 4);
console.assert(JSON.stringify(lru1) === '[["b",2],["c",3],["d",4]]', 'error');

// LRU.get

console.assert(lru1.get('a') === null, 'error');
console.assert(lru1.get('b') === 2, 'error');
console.assert(JSON.stringify(lru1) === '[["c",3],["d",4],["b",2]]', 'error');
