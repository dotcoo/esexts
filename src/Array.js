// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Array ======

// Array.new

console.assert(JSON.stringify(Array.new()) === '[]', 'error');
console.assert(JSON.stringify(Array.new('hello')) === '["hello"]', 'error');
console.assert(JSON.stringify(Array.new(2)) === '[null,null]', 'error');
console.assert(JSON.stringify(Array.new(1, 2)) === '[1,2]', 'error');

// ====== Array.prototype ======

// Array.prototype.$length

console.assert([1,2,3].$length() === 3, 'error');

// Array.prototype.$entries

console.assert(JSON.stringify([1,2,3].$entries()) === '[[0,1],[1,2],[2,3]]', 'error');

// Array.prototype.$keys

console.assert(JSON.stringify([1,2,3].$keys()) === '[0,1,2]', 'error');

// Array.prototype.$values

console.assert(JSON.stringify([1,2,3].$values()) === '[1,2,3]', 'error');

// Array.prototype.$push

console.assert(JSON.stringify([1,2,3].$push(4)) === '[1,2,3,4]', 'error');

// Array.prototype.$pop

console.assert(JSON.stringify([1,2,3].$pop()) === '[1,2]', 'error');

// Array.prototype.$shift

console.assert(JSON.stringify([1,2,3].$shift()) === '[2,3]', 'error');

// Array.prototype.$unshift

console.assert(JSON.stringify([1,2,3].$unshift(4)) === '[4,1,2,3]', 'error');

// Array.prototype.push1

console.assert([1,2,3].$push0(4,5) === 4, 'error');

// Array.prototype.unshift1

console.assert([1,2,3].$unshift0(4,5) === 4, 'error');

// Array.prototype.push3

console.assert(JSON.stringify([1,2,3].$pusha(4,5)) === '[4,5]', 'error');

// Array.prototype.unshift3

console.assert(JSON.stringify([1,2,3].$unshifta(4,5)) === '[4,5]', 'error');

// Array.prototype.first

console.assert([1,2,3].first() === 1, 'error');
console.assert([].first() === null, 'error');
console.assert([].first(0) === 0, 'error');

// Array.prototype.last

console.assert([1,2,3].last() === 3, 'error');
console.assert([].last() === null, 'error');
console.assert([].last(0) === 0, 'error');

// Array.prototype.$find

console.assert([1,2,3].$find(v => v === 2) === 2, 'error');
console.assert([1,2,3].$find(v => v === 4) === null, 'error');
console.assert([1,2,3].$find(v => v === 4, 0) === 0, 'error');

// Array.prototype.equals

console.assert([1,2,3].equals([1,2,3]), 'error');

// Array.prototype.unique

console.assert(JSON.stringify([1,2,3,1,2,3].unique()) === '[1,2,3]', 'error');

// Array.prototype.each

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].each(v => v.name += '-1')) === '[{"id":1,"name":"name1-1"},{"id":2,"name":"name2-1"},{"id":3,"name":"name3-1"}]', 'error');

// Array.prototype.toObject

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].reduce((a, c) => a.$attr(c.id, c), {})) === '{"1":{"id":1,"name":"name1"},"2":{"id":2,"name":"name2"},"3":{"id":3,"name":"name3"}}', 'error');

// Array.prototype.toGroup

console.assert(JSON.stringify([{ id: 1, name: 'name1', gender: 'man' }, { id: 2, name: 'name2', gender: 'woman' }, { id: 3, name: 'name3', gender: 'man' }].reduce((a, c) => (a.$attr(c.gender, [], false).$attr(c.gender).push(c), a), {})) === '{"man":[{"id":1,"name":"name1","gender":"man"},{"id":3,"name":"name3","gender":"man"}],"woman":[{"id":2,"name":"name2","gender":"woman"}]}', 'error');

// Array.prototype.toMap

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toMap(v => [v.id, v]).get(2)) === '{"id":2,"name":"name2"}', 'error');

// Array.prototype.toSet

console.assert(JSON.stringify([...[{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toSet(v => v.id).values()]) === '[1,2,3]', 'error');
