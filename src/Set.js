// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Set ======

const set1 = Set.new([1, 2, 3]), set2 = Map.new();

// Set.new

console.assert(JSON.stringify([...set1.values()]) === '[1,2,3]', 'error');

// ====== Set.prototype ======

// Set.prototype.lengnth0

console.assert(set1.length0() === 3, 'error');

// Set.prototype.entries0

console.assert(JSON.stringify(set1.entries0()) === '[[1,1],[2,2],[3,3]]', 'error');

// Set.prototype.keys0

console.assert(JSON.stringify(set1.keys0()) === '[1,2,3]', 'error');

// Set.prototype.values0

console.assert(JSON.stringify(set1.values0()) === '[1,2,3]', 'error');

// Set.prototype.add0

console.assert(JSON.stringify([...set1.add0(4).values()]) === '[1,2,3,4]', 'error');

// Set.prototype.delete0

console.assert(JSON.stringify([...set1.delete0(4).values()]) === '[1,2,3]', 'error');

// Set.prototype.toArray

console.assert(JSON.stringify(set1.toArray()) === '[1,2,3]', 'error');

// Set.prototype.toJSON

console.assert(JSON.stringify(set1) === '[1,2,3]', 'error');
