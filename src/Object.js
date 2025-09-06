// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Object ======

// Object.isObject
console.assert(Object.isObject({}), 'error');
console.assert(!Object.isObject([]), 'error');

// Object.merge0
console.assert(JSON.stringify(Object.merge0({ a: 1, c: [1,2,3] }, { b: 2, c: [4,5,6] })) === '{"a":1,"c":[4,5,6],"b":2}', 'error');

// Object.concat0
console.assert(JSON.stringify(Object.concat0({ a: 1, c: [1,2,3] }, { b: 2, c: [4,5,6] })) === '{"a":1,"c":[1,2,3,4,5,6],"b":2}', 'error');

// ====== Object.prototype ======

// Object.prototype.clone0
console.assert(JSON.stringify({ a: 1, b: 2, c: [1,2,3,4,5,6] }.clone0()) === '{"a":1,"b":2,"c":[1,2,3,4,5,6]}', 'error');

// Object.prototype.length0
console.assert({ a: 1, b: 2, c: [1,2,3,4,5,6] }.length0() === 3, 'error');

// Object.prototype.entries0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.entries0()) === '[["a",1],["b",2],["c",3]]', 'error');

// Object.prototype.keys0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.keys0()) === '["a","b","c"]', 'error');

// Object.prototype.values0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.values0()) === '[1,2,3]', 'error');

// Object.prototype.merge0
console.assert(JSON.stringify({ a: 1, c: [1,2,3] }.merge0({ b: 2, c: [4,5,6] })) === '{"a":1,"c":[4,5,6],"b":2}', 'error');

// Object.prototype.concat0
console.assert(JSON.stringify({ a: 1, c: [1,2,3] }.concat0({ b: 2, c: [4,5,6] })) === '{"a":1,"c":[1,2,3,4,5,6],"b":2}', 'error');

// Object.prototype.map0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.map0((k, v, i) => [k, v, i])) === '[["a",1,0],["b",2,1],["c",3,2]]', 'error');

// Object.prototype.pick0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.pick0('a', 'b')) === '{"a":1,"b":2}', 'error');

// Object.prototype.omit0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.omit0('c')) === '{"a":1,"b":2}', 'error');

// Object.prototype.attr0

console.assert({ a: 1, b: 2, c: 3 }.attr0('a') === 1, 'error');
console.assert({ a: 1, b: 2, c: 3 }.attr0(v => v.a+v.b+v.c) === 6, 'error');

// Object.prototype.toArray0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.toArray0()) === '[{"a":1,"b":2,"c":3}]', 'error');
console.assert(JSON.stringify([{ a: 1, b: 2, c: 3 }].toArray0()) === '[{"a":1,"b":2,"c":3}]', 'error');

// Object.prototype.debug0

// Object.prototype.log0

// Object.prototype.info0

// Object.prototype.warn0

// Object.prototype.error0

// Object.prototype.dir0

// === tree ===

// Object.prototype.getParents0

// Object.prototype.getChildrens0

// Object.prototype.treeFind0

// Object.prototype.treeEach0

// Object.prototype.treeMap0
