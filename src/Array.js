// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Array ======

// Array.new

console.assert(JSON.stringify(Array.new()) === '[]', 'error');
console.assert(JSON.stringify(Array.new('hello')) === '["hello"]', 'error');
console.assert(JSON.stringify(Array.new(2)) === '[null,null]', 'error');
console.assert(JSON.stringify(Array.new(1, 2)) === '[1,2]', 'error');

// ====== Array.prototype ======

// Array.prototype.length0

console.assert([1,2,3].length0() === 3, 'error');

// Array.prototype.entries0

console.assert(JSON.stringify([1,2,3].entries0()) === '[[0,1],[1,2],[2,3]]', 'error');

// Array.prototype.keys0

console.assert(JSON.stringify([1,2,3].keys0()) === '[0,1,2]', 'error');

// Array.prototype.values0

console.assert(JSON.stringify([1,2,3].values0()) === '[1,2,3]', 'error');

// Array.prototype.push0

console.assert(JSON.stringify([1,2,3].push0(4)) === '[1,2,3,4]', 'error');

// Array.prototype.pop0

console.assert(JSON.stringify([1,2,3].pop0()) === '[1,2]', 'error');

// Array.prototype.shift0

console.assert(JSON.stringify([1,2,3].shift0()) === '[2,3]', 'error');

// Array.prototype.unshift0

console.assert(JSON.stringify([1,2,3].unshift0(4)) === '[4,1,2,3]', 'error');

// Array.prototype.push1

console.assert([1,2,3].push1(4,5) === 4, 'error');

// Array.prototype.unshift1

console.assert([1,2,3].unshift1(4,5) === 4, 'error');

// Array.prototype.push3

console.assert(JSON.stringify([1,2,3].push3(4,5)) === '[4,5]', 'error');

// Array.prototype.unshift3

console.assert(JSON.stringify([1,2,3].unshift3(4,5)) === '[4,5]', 'error');

// Array.prototype.first0

console.assert([1,2,3].first0() === 1, 'error');
console.assert([].first0() === null, 'error');
console.assert([].first0(0) === 0, 'error');

// Array.prototype.last0

console.assert([1,2,3].last0() === 3, 'error');
console.assert([].last0() === null, 'error');
console.assert([].last0(0) === 0, 'error');

// Array.prototype.find0

console.assert([1,2,3].find0(v => v === 2) === 2, 'error');
console.assert([1,2,3].find0(v => v === 4) === null, 'error');
console.assert([1,2,3].find0(v => v === 4, 0) === 0, 'error');

// Array.prototype.equals0

console.assert([1,2,3].equals0([1,2,3]), 'error');

// Array.prototype.unique0

console.assert(JSON.stringify([1,2,3,1,2,3].unique0()) === '[1,2,3]', 'error');

// Array.prototype.each

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].each0(v => v.name += '-1')) === '[{"id":1,"name":"name1-1"},{"id":2,"name":"name2-1"},{"id":3,"name":"name3-1"}]', 'error');

// Array.prototype.toObject

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].reduce((a, c) => a.attr0(c.id, c), {})) === '{"1":{"id":1,"name":"name1"},"2":{"id":2,"name":"name2"},"3":{"id":3,"name":"name3"}}', 'error');

// Array.prototype.toGroup

console.assert(JSON.stringify([{ id: 1, name: 'name1', gender: 'man' }, { id: 2, name: 'name2', gender: 'woman' }, { id: 3, name: 'name3', gender: 'man' }].reduce((a, c) => (a.attr0(c.gender, [], false).attr0(c.gender).push(c), a), {})) === '{"man":[{"id":1,"name":"name1","gender":"man"},{"id":3,"name":"name3","gender":"man"}],"woman":[{"id":2,"name":"name2","gender":"woman"}]}', 'error');

// Array.prototype.toMap

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toMap(v => [v.id, v]).get(2)) === '{"id":2,"name":"name2"}', 'error');

// Array.prototype.toSet

console.assert(JSON.stringify([...[{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toSet(v => v.id).values()]) === '[1,2,3]', 'error');
