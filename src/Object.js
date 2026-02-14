// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Object ======

// Object.isObject
console.assert(Object.isObject({}), 'error');
console.assert(!Object.isObject([]), 'error');

// Object.merge0
console.assert(JSON.stringify(Object.merge$({ a: 1, c: [1,2,3] }, { b: 2, c: [4,5,6] })) === '{"a":1,"c":[4,5,6],"b":2}', 'error');

// Object.concat0
console.assert(JSON.stringify(Object.concat$({ a: 1, c: [1,2,3] }, { b: 2, c: [4,5,6] })) === '{"a":1,"c":[1,2,3,4,5,6],"b":2}', 'error');

// ====== Object.prototype ======

// Object.prototype.clone$
console.assert(JSON.stringify({ a: 1, b: 2, c: [1,2,3,4,5,6] }.clone$()) === '{"a":1,"b":2,"c":[1,2,3,4,5,6]}', 'error');

// Object.prototype.length$
console.assert({ a: 1, b: 2, c: [1,2,3,4,5,6] }.length$() === 3, 'error');

// Object.prototype.entries$
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.entries$()) === '[["a",1],["b",2],["c",3]]', 'error');

// Object.prototype.keys$
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.keys$()) === '["a","b","c"]', 'error');

// Object.prototype.values$
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.values$()) === '[1,2,3]', 'error');

// Object.prototype.merge$
console.assert(JSON.stringify({ a: 1, c: [1,2,3] }.merge$({ b: 2, c: [4,5,6] })) === '{"a":1,"c":[4,5,6],"b":2}', 'error');

// Object.prototype.concat$
console.assert(JSON.stringify({ a: 1, c: [1,2,3] }.concat$({ b: 2, c: [4,5,6] })) === '{"a":1,"c":[1,2,3,4,5,6],"b":2}', 'error');

// Object.prototype.map$
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.entries$().map(([k, v], i) => [k, v, i])) === '[["a",1,0],["b",2,1],["c",3,2]]', 'error');

// Object.prototype.pick$

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.pick$('a', 'b')) === '{"a":1,"b":2}', 'error');

// Object.prototype.omit$

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.omit$('c')) === '{"a":1,"b":2}', 'error');

// Object.prototype.attr$

console.assert({ a: 1, b: 2, c: 3 }.attr$('a') === 1, 'error');
console.assert({ a: 1, b: 2, c: 3 }.attr$('a', 2).a === 2, 'error');
// console.assert({ a: 1, b: 2, c: 3 }.attr$(v => v.a+v.b+v.c) === 6, 'error');

// Object.prototype.toArray0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.toArray$()) === '[{"a":1,"b":2,"c":3}]', 'error');
console.assert(JSON.stringify([{ a: 1, b: 2, c: 3 }].toArray$()) === '[{"a":1,"b":2,"c":3}]', 'error');

// Object.prototype.debug$

// Object.prototype.log$

// Object.prototype.info$

// Object.prototype.warn$

// Object.prototype.error$

// Object.prototype.dir$

// === tree ===

// Object.prototype.getParents0

// Object.prototype.getChildrens0

// Object.prototype.treeFind0

// Object.prototype.treeEach0

// Object.prototype.treeMap0
