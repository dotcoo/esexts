// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Set ======

const set1 = Set.new([1, 2, 3]), set2 = Map.new();

// Set.new

console.assert(JSON.stringify([...set1.values()]) === '[1,2,3]', 'error');

// ====== Set.prototype ======

// Set.prototype.$lengnth

console.assert(set1.$length() === 3, 'error');

// Set.prototype.$entries

console.assert(JSON.stringify(set1.$entries()) === '[[1,1],[2,2],[3,3]]', 'error');

// Set.prototype.$keys

console.assert(JSON.stringify(set1.$keys()) === '[1,2,3]', 'error');

// Set.prototype.$values

console.assert(JSON.stringify(set1.$values()) === '[1,2,3]', 'error');

// Set.prototype.$add

console.assert(JSON.stringify([...set1.$add(4).values()]) === '[1,2,3,4]', 'error');

// Set.prototype.$delete

console.assert(JSON.stringify([...set1.$delete(4).values()]) === '[1,2,3]', 'error');

// Set.prototype.toArray

console.assert(JSON.stringify(set1.toArray()) === '[1,2,3]', 'error');

// Set.prototype.toJSON

console.assert(JSON.stringify(set1) === '[1,2,3]', 'error');
