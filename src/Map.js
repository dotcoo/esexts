// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Map ======

const map1 = Map.new([[1, 'one'], [2, 'two'], [3, 'three']]), map2 = Map.new();

// Map.new

console.assert(JSON.stringify([...map1.values()]) === '["one","two","three"]', 'error');

// ====== Map.prototype ======

// Map.prototype.lengnth0

console.assert(map1.length0() === 3, 'error');

// Map.prototype.entries0

console.assert(JSON.stringify(map1.entries0()) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// Map.prototype.keys0

console.assert(JSON.stringify(map1.keys0()) === '[1,2,3]', 'error');

// Map.prototype.values0

console.assert(JSON.stringify(map1.values0()) === '["one","two","three"]', 'error');

// Map.prototype.set0

console.assert(JSON.stringify([...map1.set0(4, 'four').values()]) === '["one","two","three","four"]', 'error');

// Map.prototype.delete0

console.assert(JSON.stringify([...map1.delete0(4).values()]) === '["one","two","three"]', 'error');

// Map.prototype.get0

console.assert(map1.get0(1) === 'one', 'error');
console.assert(map1.get0(0) === null, 'error');
console.assert(map1.get0(0, 0) === 0, 'error');

// Map.prototype.get1

console.assert(map2.get1(10, key => key * key) === 100, 'error');

// Map.prototype.getAsync1

console.assert((await map2.get1(10, async key => key * key)) === 100, 'error');

// Map.prototype.toObject

console.assert(JSON.stringify(map1.toObject()) === '{"1":"one","2":"two","3":"three"}', 'error');

// Map.prototype.toArray0

console.assert(JSON.stringify(map1.toArray()) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// Map.prototype.toJSON

console.assert(JSON.stringify(map1) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');
