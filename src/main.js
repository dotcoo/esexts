// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

typeof window === 'undefined' && require('../lib');

// ====== Object ======

// Object.isObject
console.assert(Object.isObject({}), 'error');
console.assert(!Object.isObject([]), 'error');

// Object.merge0
console.assert(JSON.stringify(Object.merge0({ a: 1, c: [1,2,3] }, { b: 2, c: [4,5,6] })) === '{"a":1,"c":[4,5,6],"b":2}', 'error');

// Object.concat0
console.assert(JSON.stringify(Object.concat0({ a: 1, c: [1,2,3] }, { b: 2, c: [4,5,6] })) === '{"a":1,"c":[1,2,3,4,5,6],"b":2}', 'error');

// ====== Object.prototype ======

// object.clone0
console.assert(JSON.stringify({ a: 1, b: 2, c: [1,2,3,4,5,6] }.clone0()) === '{"a":1,"b":2,"c":[1,2,3,4,5,6]}', 'error');

// object.length0
console.assert({ a: 1, b: 2, c: [1,2,3,4,5,6] }.length0() === 3, 'error');

// object.entries0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.entries0()) === '[["a",1],["b",2],["c",3]]', 'error');

// object.keys0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.keys0()) === '["a","b","c"]', 'error');

// object.values0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.values0()) === '[1,2,3]', 'error');

// object.merge0
console.assert(JSON.stringify({ a: 1, c: [1,2,3] }.merge0({ b: 2, c: [4,5,6] })) === '{"a":1,"c":[4,5,6],"b":2}', 'error');

// object.concat0
console.assert(JSON.stringify({ a: 1, c: [1,2,3] }.concat0({ b: 2, c: [4,5,6] })) === '{"a":1,"c":[1,2,3,4,5,6],"b":2}', 'error');

// object.map0
console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.map0((k, v, i) => [k, v, i])) === '[["a",1,0],["b",2,1],["c",3,2]]', 'error');

// object.pick0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.pick0('a', 'b')) === '{"a":1,"b":2}', 'error');

// object.omit0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.omit0('c')) === '{"a":1,"b":2}', 'error');

// object.attr0

console.assert({ a: 1, b: 2, c: 3 }.attr0('a') === 1, 'error');
console.assert({ a: 1, b: 2, c: 3 }.attr0(v => v.a+v.b+v.c) === 6, 'error');

// object.toArray0

console.assert(JSON.stringify({ a: 1, b: 2, c: 3 }.toArray0()) === '[{"a":1,"b":2,"c":3}]', 'error');
console.assert(JSON.stringify([{ a: 1, b: 2, c: 3 }].toArray0()) === '[{"a":1,"b":2,"c":3}]', 'error');

// object.debug0

// object.log0

// object.info0

// object.warn0

// object.error0

// object.dir0

// ====== Number ======

// ====== Number.prototype ======

// number.ceil

const number1 = 1.456, number2 = 1.678;

console.assert(number1.ceil() === 2, 'error');

// number.floor

console.assert(number1.floor() === 1, 'error');

// number.trunc

console.assert(number1.trunc() === 1, 'error');

// number.abs

console.assert(number1.abs() === 1.456, 'error');
console.assert((-number1).abs() === 1.456, 'error');

// number.max

console.assert(number1.max(number2) === number2, 'error');

// number.min

console.assert(number1.min(number2) === number1, 'error');

// number.baseConvert

console.assert((16).baseConvert(16) === '10', 'error');
console.assert((32).baseConvert(32) === '10', 'error');
console.assert((64).baseConvert(64) === '10', 'error');

// number.round

console.assert(number2.round() === 2, 'error');
console.assert(number2.round(1) === 1.7, 'error');
console.assert(number2.round(2) === 1.68, 'error');

// number.toFixed0

console.assert(number1.toFixed0() === 1, 'error');
console.assert(number1.toFixed0(1) === 1.5, 'error');
console.assert(number1.toFixed0(2) === 1.46, 'error');

// number.toDate

console.assert((1).toDate().getTime() === 1000, 'error');
console.assert((2500000001).toDate().getTime() === 2500000001, 'error');

// ====== BigInt ======

// ====== BigInt.prototype ======

const bigInt1 = 1n, bigInt2 = 9007199254740992n;

// bigInt.toJSON

console.assert(JSON.stringify(bigInt1) === '1', 'error');
console.assert(JSON.stringify(bigInt2) === '"9007199254740992"', 'error');

// ====== String ======

// ====== String.prototype ======

const string1 = 'hello world';
const string2 = 'hello,world';
const string3 = 'hello,world,hello,world';

// string.length0

console.assert('hello world'.length0() === 11, 'error');

// string.substring0

console.assert(string1.substring0() === 'hello world', 'error');
console.assert(string1.substring0(2) === 'llo world', 'error');
console.assert(string1.substring0(2, 8) === 'llo wo', 'error');
console.assert(string1.substring0(2, -3) === 'llo wo', 'error');
console.assert(string1.substring0(-9, 8) === 'llo wo', 'error');
console.assert(string1.substring0(-9, -3) === 'llo wo', 'error');

// string.substr0

console.assert(string1.substr0() === 'hello world', 'error');
console.assert(string1.substr0(2) === 'llo world', 'error');
console.assert(string1.substr0(2, 6) === 'llo wo', 'error');
console.assert(string1.substr0(-9, 6) === 'llo wo', 'error');

// string.split0

console.assert(JSON.stringify(string3.split0()) === '["hello","world","hello","world"]', 'error');
console.assert(JSON.stringify(string3.split0(',')) === '["hello","world","hello","world"]', 'error');
console.assert(JSON.stringify(string3.split0(',', 1)) === '["hello,world,hello,world"]', 'error');
console.assert(JSON.stringify(string3.split0(',', 2)) === '["hello","world,hello,world"]', 'error');
console.assert(JSON.stringify(string3.split0(',', 3)) === '["hello","world","hello,world"]', 'error');

// string.splitNumber

console.assert(JSON.stringify('1,2,3,4,5'.splitNumber()) === '[1,2,3,4,5]', 'error');
console.assert(JSON.stringify('1 2 3 4 5'.splitNumber(' ')) === '[1,2,3,4,5]', 'error');

// string.splitSegment

console.assert(JSON.stringify(string1.splitSegment()) === '["h","e","l","l","o"," ","w","o","r","l","d"]', 'error');
console.assert(JSON.stringify(string1.splitSegment(3)) === '["hel","lo ","wor","ld"]', 'error');

// string.sprintf

console.assert('%d * %d = %d'.sprintf(2,3,6) === '2 * 3 = 6', 'error');
console.assert('%s say: %s.'.sprintf('jerry', 'hello') === 'jerry say: hello.', 'error');

// string.subOf

console.assert('<p>hello</p><p>world</p>'.subOf('<p>', '</p>') === 'hello', 'error');
console.assert('<p>hello</p><p>world</p>'.subOf('<p>', '</p>', 1) === 'world', 'error');
console.assert('<p>hello</p><p>world</p>'.subOf('<p>', '</p>', 0, 1) === 'world', 'error');

// string.lastSubOf

console.assert('<p>hello</p><p>world</p>'.lastSubOf('<p>', '</p>') === 'world', 'error');
console.assert('<p>hello</p><p>world</p>'.lastSubOf('<p>', '</p>', 1) === 'hello', 'error');
console.assert('<p>hello</p><p>world</p>'.lastSubOf('<p>', '</p>', 0, 1) === 'hello', 'error');

// string.camel2under

console.assert('helloWorld'.camel2under() === 'hello_world', 'error');

// string.under2camel

console.assert('hello_world'.under2camel() === 'helloWorld', 'error');

// string.camel2pascal

console.assert('helloWorld'.camel2pascal() === 'HelloWorld', 'error');

// string.pascal2camel

console.assert('HelloWorld'.pascal2camel() === 'helloWorld', 'error');

// string.under2kebab

console.assert('HelloWorld'.pascal2camel().camel2under().under2kebab() === 'hello-world', 'error');

// string.kebab2under

console.assert('hello-world'.kebab2under().under2camel().camel2pascal() === 'HelloWorld', 'error');

// string.baseConvert

console.assert('11'.baseConvert(16) === 17, 'error');
console.assert('11'.baseConvert(32) === 33, 'error');
console.assert('11'.baseConvert(64) === 65, 'error');

// string.toFixed0

console.assert('11.11'.toFixed0() === 11, 'error');
console.assert('11.11'.toFixed0(1) === 11.1, 'error');
console.assert('11.11'.toFixed0(2) === 11.11, 'error');

// string.toDate

console.assert('1970-01-01 00:00:00'.toDate().getTime() === -28800000, 'error');

// ====== Iterator ======

// ====== Iterator.prototype ======

// iterator.toArray

console.assert(JSON.stringify([1,2,3].values().toArray()) === '[1,2,3]', 'error');

// ====== Array ======

// Array.new

console.assert(JSON.stringify(Array.new()) === '[]', 'error');
console.assert(JSON.stringify(Array.new('hello')) === '["hello"]', 'error');
console.assert(JSON.stringify(Array.new(2)) === '[null,null]', 'error');
console.assert(JSON.stringify(Array.new(1, 2)) === '[1,2]', 'error');

// ====== Array.prototype ======

// array.length0

console.assert([1,2,3].length0() === 3, 'error');

// array.entries0

console.assert(JSON.stringify([1,2,3].entries0()) === '[[0,1],[1,2],[2,3]]', 'error');

// array.keys0

console.assert(JSON.stringify([1,2,3].keys0()) === '[0,1,2]', 'error');

// array.values0

console.assert(JSON.stringify([1,2,3].values0()) === '[1,2,3]', 'error');

// array.push0

console.assert(JSON.stringify([1,2,3].push0(4)) === '[1,2,3,4]', 'error');

// array.pop0

console.assert(JSON.stringify([1,2,3].pop0()) === '[1,2]', 'error');

// array.shift0

console.assert(JSON.stringify([1,2,3].shift0()) === '[2,3]', 'error');

// array.unshift0

console.assert(JSON.stringify([1,2,3].unshift0(4)) === '[4,1,2,3]', 'error');

// array.push1

console.assert([1,2,3].push1(4,5) === 4, 'error');

// array.unshift1

console.assert([1,2,3].unshift1(4,5) === 4, 'error');

// array.push3

console.assert(JSON.stringify([1,2,3].push3(4,5)) === '[4,5]', 'error');

// array.unshift3

console.assert(JSON.stringify([1,2,3].unshift3(4,5)) === '[4,5]', 'error');

// array.first0

console.assert([1,2,3].first0() === 1, 'error');
console.assert([].first0() === null, 'error');
console.assert([].first0(0) === 0, 'error');

// array.last0

console.assert([1,2,3].last0() === 3, 'error');
console.assert([].last0() === null, 'error');
console.assert([].last0(0) === 0, 'error');

// array.find0

console.assert([1,2,3].find0(v => v === 2) === 2, 'error');
console.assert([1,2,3].find0(v => v === 4) === null, 'error');
console.assert([1,2,3].find0(v => v === 4, 0) === 0, 'error');

// array.equals0

console.assert([1,2,3].equals0([1,2,3]), 'error');

// array.unique0

console.assert(JSON.stringify([1,2,3,1,2,3].unique0()) === '[1,2,3]', 'error');

// array.each

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].each0(v => v.name += '-1')) === '[{"id":1,"name":"name1-1"},{"id":2,"name":"name2-1"},{"id":3,"name":"name3-1"}]', 'error');

// array.toObject

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toObject(v => [v.id, v])) === '{"1":{"id":1,"name":"name1"},"2":{"id":2,"name":"name2"},"3":{"id":3,"name":"name3"}}', 'error');

// array.toMap

console.assert(JSON.stringify([{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toMap(v => [v.id, v]).get(2)) === '{"id":2,"name":"name2"}', 'error');

// array.toSet

console.assert(JSON.stringify([...[{ id: 1, name: 'name1' }, { id: 2, name: 'name2' }, { id: 3, name: 'name3' }].toSet(v => v.id).values()]) === '[1,2,3]', 'error');

// array.toGroup

console.assert(JSON.stringify([{ id: 1, name: 'name1', gender: 'man' }, { id: 2, name: 'name2', gender: 'woman' }, { id: 3, name: 'name3', gender: 'man' }].toGroup(v => [v.gender, v])) === '{"man":[{"id":1,"name":"name1","gender":"man"},{"id":3,"name":"name3","gender":"man"}],"woman":[{"id":2,"name":"name2","gender":"woman"}]}', 'error');

// array.toMerge

console.assert(JSON.stringify([{ id: 1, name: 'name1', gender: 'man' }, { id: 2, name: 'name2', gender: 'woman' }, { id: 3, name: 'name3', gender: 'man' }].toMerge(v => v.gender)) === '[{"id":1,"name":"name1","gender":"man","children":[{"id":1,"name":"name1","gender":"man"},{"id":3,"name":"name3","gender":"man"}]},{"id":2,"name":"name2","gender":"woman","children":[{"id":2,"name":"name2","gender":"woman"}]}]', 'error');

// ====== Map ======

const map1 = Map.new([[1, 'one'], [2, 'two'], [3, 'three']]), map2 = Map.new();

// Map.new

console.assert(JSON.stringify([...map1.values()]) === '["one","two","three"]', 'error');

// ====== Map.prototype ======

// map.lengnth0

console.assert(map1.length0() === 3, 'error');

// map.entries0

console.assert(JSON.stringify(map1.entries0()) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// map.keys0

console.assert(JSON.stringify(map1.keys0()) === '[1,2,3]', 'error');

// map.values0

console.assert(JSON.stringify(map1.values0()) === '["one","two","three"]', 'error');

// map.set0

console.assert(JSON.stringify([...map1.set0(4, 'four').values()]) === '["one","two","three","four"]', 'error');

// map.delete0

console.assert(JSON.stringify([...map1.delete0(4).values()]) === '["one","two","three"]', 'error');

// map.get0

console.assert(map1.get0(1) === 'one', 'error');
console.assert(map1.get0(0) === null, 'error');
console.assert(map1.get0(0, 0) === 0, 'error');

// map.get1

console.assert(map2.get1(10, key => key * key) === 100, 'error');

// map.getAsync1

console.assert((await map2.get1(10, async key => key * key)) === 100, 'error');

// map.toObject

console.assert(JSON.stringify(map1.toObject()) === '{"1":"one","2":"two","3":"three"}', 'error');

// map.toArray0

console.assert(JSON.stringify(map1.toArray()) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// map.toJSON

console.assert(JSON.stringify(map1) === '[[1,"one"],[2,"two"],[3,"three"]]', 'error');

// ====== Set ======

const set1 = Set.new([1, 2, 3]), set2 = Map.new();

// Set.new

console.assert(JSON.stringify([...set1.values()]) === '[1,2,3]', 'error');

// ====== Set.prototype ======

// set.lengnth0

console.assert(map1.length0() === 3, 'error');

// set.entries0

console.assert(JSON.stringify(set1.entries0()) === '[[1,1],[2,2],[3,3]]', 'error');

// set.keys0

console.assert(JSON.stringify(set1.keys0()) === '[1,2,3]', 'error');

// set.values0

console.assert(JSON.stringify(set1.values0()) === '[1,2,3]', 'error');

// set.add0

console.assert(JSON.stringify([...set1.add0(4).values()]) === '[1,2,3,4]', 'error');

// set.delete0

console.assert(JSON.stringify([...set1.delete0(4).values()]) === '[1,2,3]', 'error');

// set.toArray

console.assert(JSON.stringify(set1.toArray()) === '[1,2,3]', 'error');

// set.toJSON

console.assert(JSON.stringify(set1) === '[1,2,3]', 'error');

// ====== Date ======

const date0 = Date.new(), date1 = Date.new(0), date2 = Date.new(1751235892701), date3 = Date.new('2025-06-29 06:27:06'), date4 = Date.new('2025/06/29 06:27:06');

// Date.new

console.assert(date0.getTime() > 1, 'error');
console.assert(date1.getTime() === 0, 'error');
console.assert(date2.getTime() === 1751235892701, 'error');
console.assert(date3.getTime() === 1751149626000, 'error');
console.assert(date4.getTime() === 1751149626000, 'error');

// Date.format

console.assert(date3.format() === '2025-06-29 06:27:06', 'error');

// Date.unix

console.assert(Date.unix() > 1 && Date.unix() < Date.now(), 'error');

// Date.fromUnix

console.assert(Date.fromUnix(1).getTime() === new Date(1000).getTime(), 'error');

// Date.expr

console.assert(Date.expr({ d: 1 }).getTime() >= Date.now() + 86399000 && Date.expr({ d: 1 }).getTime() <= Date.now() + 86401000)

// Date.toDayRange

// Date.toWeekRange

// Date.toMonthRange

// Date.toYearRange

// ====== Date.prototype ======

// date.format

console.assert(date3.format() === '2025-06-29 06:27:06', 'error');
console.assert(date3.format('y-m-d h:i:s') === '2025-06-29 06:27:06', 'error');
console.assert(date3.format('Y-M-D H:I:S') === '2025-6-29 6:27:6', 'error');

// date.unix

console.assert(date3.unix() === 1751149626, 'error');

// date.isLeapYear

console.assert(date3.isLeapYear() === false, 'error');

// date.getMonthDay

console.assert(date3.getMonthDay() === 30, 'error');

// date.expr

console.assert(date3.expr({ y: 1, m: 1, d: 1, h: 1, i: 1, s: 1 }).format() === '2026-07-30 07:28:07', 'error');

// date.begin

console.assert(date3.begin().format() === '2025-06-29 00:00:00', 'error');
console.assert(date3.begin(1).format() === '2025-01-01 00:00:00', 'error');
console.assert(date3.begin(2).format() === '2025-06-01 00:00:00', 'error');
console.assert(date3.begin(3).format() === '2025-06-29 00:00:00', 'error');
console.assert(date3.begin(4).format() === '2025-06-29 06:00:00', 'error');
console.assert(date3.begin(5).format() === '2025-06-29 06:27:00', 'error');
console.assert(date3.begin(6).format() === '2025-06-29 06:27:06', 'error');

// date.end

console.assert(date3.end().format() === '2025-06-29 23:59:59', 'error');
console.assert(date3.end(1).format() === '2025-12-31 23:59:59', 'error');
console.assert(date3.end(2).format() === '2025-06-30 23:59:59', 'error');
console.assert(date3.end(3).format() === '2025-06-29 23:59:59', 'error');
console.assert(date3.end(4).format() === '2025-06-29 06:59:59', 'error');
console.assert(date3.end(5).format() === '2025-06-29 06:27:59', 'error');
console.assert(date3.end(6).format() === '2025-06-29 06:27:06', 'error');

// date.week

console.assert(date3.week(1, -1).format() === '2025-06-23 06:27:06', 'error');
console.assert(date3.week(1).format() === '2025-06-30 06:27:06', 'error');

// date.toJSON

console.assert(JSON.stringify(date3) === '1751149626000', 'error');

// ====== RegExp ======

const reg1 = RegExp.new('^\\d$'), reg2 = RegExp.new('^\\w$', 'i');

// RegExp.new

console.assert(reg1.test(6), 'error');

// ====== RegExp.prototype ======

// regExp.toJSON

console.assert(JSON.stringify(reg1) === '"/^\\\\d$/"', 'error');
console.assert(JSON.stringify(reg2) === '"/^\\\\w$/i"', 'error');

// ====== Promise ======

// Promise.channel

// ====== Promise.prototype ======

// promise.tryCatch

// ====== JSON ======

// JSON.parse0

console.assert(JSON.parse0('', 0) === 0, 'error');

// ====== Convert ======

// string.string2bytes

console.assert(JSON.stringify('abcdefg'.string2bytes()) === '[97,98,99,100,101,102,103]', 'error');

// array.bytes2string

console.assert([97,98,99,100,101,102,103].bytes2string() === 'abcdefg', 'error');

// array.base64encode

console.assert([97,98,99,100,101,102,103].base64encode() === 'YWJjZGVmZw==', 'error');

// string.base64decode

console.assert(JSON.stringify('YWJjZGVmZw=='.base64decode()) === '[97,98,99,100,101,102,103]', 'error');

// array.bytes2hex

console.assert([10,11,12,253,254,255].bytes2hex() === '0a0b0cfdfeff', 'error');

// string.hex2bytes

console.assert(JSON.stringify('0a0b0cfdfeff'.hex2bytes()) === '[10,11,12,253,254,255]', 'error');

// array.toUint8Array

// arrayBuffer.toUint8Array

// uint8Array.bytes2hex

// uint8Array.bytes2string

// uint8Array.base64encode

// uint8Array.toArray

// ====== Tree ======

const list1 = [
  { tid: 1, id: 1, pid: 0, name: '1' },
    { tid: 1, id: 2, pid: 1, name: '1-2' },
      { tid: 1, id: 5, pid: 2, name: '1-2-5' },
        { tid: 1, id: 14, pid: 5, name: '1-2-5-14' },
        { tid: 1, id: 15, pid: 5, name: '1-2-5-15' },
        { tid: 1, id: 16, pid: 5, name: '1-2-5-16' },
      { tid: 1, id: 6, pid: 2, name: '1-2-6' },
        { tid: 1, id: 17, pid: 6, name: '1-2-6-17' },
        { tid: 1, id: 18, pid: 6, name: '1-2-6-18' },
        { tid: 1, id: 19, pid: 6, name: '1-2-6-19' },
      { tid: 1, id: 7, pid: 2, name: '1-2-7' },
        { tid: 1, id: 20, pid: 7, name: '1-2-7-20' },
        { tid: 1, id: 21, pid: 7, name: '1-2-7-21' },
        { tid: 1, id: 22, pid: 7, name: '1-2-7-22' },
    { tid: 1, id: 3, pid: 1, name: '1-3' },
      { tid: 1, id: 8, pid: 3, name: '1-3-8' },
        { tid: 1, id: 23, pid: 8, name: '1-3-8-23' },
        { tid: 1, id: 24, pid: 8, name: '1-3-8-24' },
        { tid: 1, id: 25, pid: 8, name: '1-3-8-25' },
      { tid: 1, id: 9, pid: 3, name: '1-3-9' },
        { tid: 1, id: 26, pid: 9, name: '1-3-9-26' },
        { tid: 1, id: 27, pid: 9, name: '1-3-9-27' },
        { tid: 1, id: 28, pid: 9, name: '1-3-9-28' },
      { tid: 1, id: 10, pid: 3, name: '1-3-10' },
        { tid: 1, id: 29, pid: 10, name: '1-3-10-29' },
        { tid: 1, id: 30, pid: 10, name: '1-3-10-30' },
        { tid: 1, id: 31, pid: 10, name: '1-3-10-31' },
    { tid: 1, id: 4, pid: 1, name: '1-4' },
      { tid: 1, id: 11, pid: 4, name: '1-4-11' },
        { tid: 1, id: 32, pid: 11, name: '1-4-11-32' },
        { tid: 1, id: 33, pid: 11, name: '1-4-11-33' },
        { tid: 1, id: 34, pid: 11, name: '1-4-11-34' },
      { tid: 1, id: 12, pid: 4, name: '1-4-12' },
        { tid: 1, id: 35, pid: 12, name: '1-4-12-35' },
        { tid: 1, id: 36, pid: 12, name: '1-4-12-36' },
        { tid: 1, id: 37, pid: 12, name: '1-4-12-37' },
      { tid: 1, id: 13, pid: 4, name: '1-4-13' },
        { tid: 1, id: 38, pid: 13, name: '1-4-13-38' },
        { tid: 1, id: 39, pid: 13, name: '1-4-13-39' },
        { tid: 1, id: 40, pid: 13, name: '1-4-13-40' },
];

const list2 = [
  { id: 1, pid: 0, name: '1' },
    { id: 4, pid: 1, name: '1-4' },
      { id: 13, pid: 4, name: '1-4-13' },
      { id: 14, pid: 4, name: '1-4-14' },
      { id: 15, pid: 4, name: '1-4-15' },
    { id: 5, pid: 1, name: '1-5' },
      { id: 16, pid: 5, name: '1-5-16' },
      { id: 17, pid: 5, name: '1-5-17' },
      { id: 18, pid: 5, name: '1-5-18' },
    { id: 6, pid: 1, name: '1-6' },
      { id: 19, pid: 6, name: '1-6-19' },
      { id: 20, pid: 6, name: '1-6-20' },
      { id: 21, pid: 6, name: '1-6-21' },
  { id: 2, pid: 0, name: '2' },
    { id: 7, pid: 2, name: '2-7' },
      { id: 22, pid: 7, name: '2-7-22' },
      { id: 23, pid: 7, name: '2-7-23' },
      { id: 24, pid: 7, name: '2-7-24' },
    { id: 8, pid: 2, name: '2-8' },
      { id: 25, pid: 8, name: '2-8-25' },
      { id: 26, pid: 8, name: '2-8-26' },
      { id: 27, pid: 8, name: '2-8-27' },
    { id: 9, pid: 2, name: '2-9' },
      { id: 28, pid: 9, name: '2-9-28' },
      { id: 29, pid: 9, name: '2-9-29' },
      { id: 30, pid: 9, name: '2-9-30' },
  { id: 3, pid: 0, name: '3' },
    { id: 10, pid: 3, name: '3-10' },
      { id: 31, pid: 10, name: '3-10-31' },
      { id: 32, pid: 10, name: '3-10-32' },
      { id: 33, pid: 10, name: '3-10-33' },
    { id: 11, pid: 3, name: '3-11' },
      { id: 34, pid: 11, name: '3-11-34' },
      { id: 35, pid: 11, name: '3-11-35' },
      { id: 36, pid: 11, name: '3-11-36' },
    { id: 12, pid: 3, name: '3-12' },
      { id: 37, pid: 12, name: '3-12-37' },
      { id: 38, pid: 12, name: '3-12-39' },
      { id: 39, pid: 12, name: '3-12-39' },
];

const tree1 = [
  { id: 1, name: '1', children: [
    { id: 4, name: '1-4', children: [
      { id: 13, name: '1-4-13' },
      { id: 14, name: '1-4-14' },
      { id: 15, name: '1-4-15' },
    ] },
    { id: 5, name: '1-5', children: [
      { id: 16, name: '1-5-16' },
      { id: 17, name: '1-5-17' },
      { id: 18, name: '1-5-18' },
    ] },
    { id: 6, name: '1-6', children: [
      { id: 19, name: '1-6-19' },
      { id: 20, name: '1-6-20' },
      { id: 21, name: '1-6-21' },
    ] },
  ] },
  { id: 2, name: '2', children: [
    { id: 7, name: '2-7', children: [
      { id: 22, name: '2-7-22' },
      { id: 23, name: '2-7-23' },
      { id: 24, name: '2-7-24' },
    ] },
    { id: 8, name: '2-8', children: [
      { id: 25, name: '2-8-25' },
      { id: 26, name: '2-8-26' },
      { id: 27, name: '2-8-27' },
    ] },
    { id: 9, name: '2-9', children: [
      { id: 28, name: '2-9-28' },
      { id: 29, name: '2-9-29' },
      { id: 30, name: '2-9-30' },
    ] },
  ] },
  { id: 3, name: '3', children: [
    { id: 10, name: '3-10', children: [
      { id: 31, name: '3-10-31' },
      { id: 32, name: '3-10-32' },
      { id: 33, name: '3-10-33' },
    ] },
    { id: 11, name: '3-11', children: [
      { id: 34, name: '3-11-34' },
      { id: 35, name: '3-11-35' },
      { id: 36, name: '3-11-36' },
    ] },
    { id: 12, name: '3-12', children: [
      { id: 37, name: '3-12-37' },
      { id: 38, name: '3-12-39' },
      { id: 39, name: '3-12-39' },
    ] },
  ] },
];

// ====== Tree Object ======

// object.getParents0

// object.getChildrens0

// object.treeFind0

// object.treeEach0

// object.treeMap0

// array.assoc

// array.toTree

// array.tree2tree

// array.treeFind0

// array.treeEach0

// array.treeMap0

console.log(list1.clone0().toTree());
console.log(list2.clone0().toTree({ hasRoot: false }));
console.log(tree1.clone0().tree2tree());

const t1 = list1.clone0().toTree();

const n30 = t1.treeFind0(v => v.id == 30);
console.log(n30.getParents0());
console.log(n30.getParents0(true));
console.log(n30.getParents0(true, 2));

const n1 = t1.treeFind0(v => v.id == 1);
n1.getChildrens0(false).each0(v => console.log('  '.repeat(v.level) + v.id));
n1.getChildrens0(true).each0(v => console.log('  '.repeat(v.level) + v.id));
n1.getChildrens0(false, 2).each0(v => console.log('  '.repeat(v.level) + v.id));
n1.getChildrens0(true, 2).each0(v => console.log('  '.repeat(v.level) + v.id));

t1.treeEach0(v => console.log('  '.repeat(v.level) + v.id));
t1.treeEach0(v => console.log('  '.repeat(v.level) + v.id), false, 2);

t1.treeMap0(({ id, name, level }) => ({ id, name, level })).treeEach0(v => console.log('  '.repeat(v.level) + v.id));
t1.treeMap0(({ id, name, level }) => ({ id, name, level }), false, 2).treeEach0(v => console.log('  '.repeat(v.level) + v.id));

// === Tree Array ===

console.log('Array.treeFind0', list1.clone0().toTree().children.treeFind0(v => v.id == 5));
console.log('Array.treeEach0', list1.clone0().toTree().children.treeEach0(v => v.name += '-each'));
console.log('Array.treeMap0', list1.clone0().toTree().children.treeMap0(({ id, name, level }) => ({ id, name: name + '-map', level })));

// === Tree Methods ===

const t2 = list1.clone0().toTree();

console.log('Object.getChildrens0', t2.getChildrens0(true));
console.log('Object.getChildrens0', t2.getChildrens0(true, 1));
