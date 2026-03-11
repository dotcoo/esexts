// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Map ======

const map1 = Map.new([[1, 'one'], [2, 'two'], [3, 'three']]), map2 = Map.new([[1, 'one']]), map3 = Map.new([[1, 'one'], [2, 'two'], [3, 'three']]);

// Map.new

console.assert(JSON.stringify([...map1.values()]) === '["one","two","three"]', 'error');

// ====== Map.prototype ======

// Map.prototype.$lengnth

console.assert(map1.$length() === 3, 'error');

// Map.prototype.$entries

console.assert(JSON.stringify(map1.$entries()) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// Map.prototype.$keys

console.assert(JSON.stringify(map1.$keys()) === '[1,2,3]', 'error');

// Map.prototype.$values

console.assert(JSON.stringify(map1.$values()) === '["one","two","three"]', 'error');

// Map.prototype.$set

console.assert(JSON.stringify([...map1.$set(4, 'four').values()]) === '["one","two","three","four"]', 'error');

// Map.prototype.$delete

console.assert(JSON.stringify([...map1.$delete(4).values()]) === '["one","two","three"]', 'error');

// Map.prototype.$getOrInsert

console.assert(map1.$getOrInsert(1) === 'one', 'error');
console.assert(map1.$getOrInsert(4) === null, 'error');
console.assert(map1.$getOrInsert(5, 0) === 0, 'error');

// Map.prototype.$getOrInsertComputed

console.assert(map1.$getOrInsertComputed(1, key => key * key) === 'one', 'error');
console.assert(map1.$getOrInsertComputed(6, key => key * key) === 36, 'error');
console.assert(map1.$getOrInsertComputed(7, key => key * key) === 49, 'error');

// Map.prototype.$get

console.assert(map2.$get(1, null) === 'one', 'error');
console.assert(map2.$get(2, 4) === 4, 'error');
console.assert(map2.$get(3, key => key * key) === 9, 'error');

// Map.prototype.$get$async

console.assert((await map2.$get$async(1, null)) === 'one', 'error');
console.assert((await map2.$get$async(4, 16)) === 16, 'error');
console.assert((await map2.$get$async(5, key => new Promise(r => setTimeout(() => r(key * key), 10)))) === 25, 'error');

// Map.prototype.toObject

console.assert(JSON.stringify(map3.toObject()) === '{"1":"one","2":"two","3":"three"}', 'error');

// Map.prototype.toArray

console.assert(JSON.stringify(map3.toArray()) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// Map.prototype.toJSON

console.assert(JSON.stringify(map3) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');
