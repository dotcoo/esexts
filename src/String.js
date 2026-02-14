// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== String ======

// ====== String.prototype ======

const string1 = 'hello world';
const string2 = 'hello,world';
const string3 = 'hello,world,hello,world';

// String.prototype.length$

console.assert('hello world'.length$() === 11, 'error');

// String.prototype.substring$

console.assert(string1.substring$() === 'hello world', 'error');
console.assert(string1.substring$(2) === 'llo world', 'error');
console.assert(string1.substring$(2, 8) === 'llo wo', 'error');
console.assert(string1.substring$(2, -3) === 'llo wo', 'error');
console.assert(string1.substring$(-9, 8) === 'llo wo', 'error');
console.assert(string1.substring$(-9, -3) === 'llo wo', 'error');

// String.prototype.substr$

console.assert(string1.substr$() === 'hello world', 'error');
console.assert(string1.substr$(2) === 'llo world', 'error');
console.assert(string1.substr$(2, 6) === 'llo wo', 'error');
console.assert(string1.substr$(-9, 6) === 'llo wo', 'error');

// String.prototype.split$

console.assert(JSON.stringify(string3.split$()) === '["hello","world","hello","world"]', 'error');
console.assert(JSON.stringify(string3.split$(',')) === '["hello","world","hello","world"]', 'error');
console.assert(JSON.stringify(string3.split$(',', 1)) === '["hello,world,hello,world"]', 'error');
console.assert(JSON.stringify(string3.split$(',', 2)) === '["hello","world,hello,world"]', 'error');
console.assert(JSON.stringify(string3.split$(',', 3)) === '["hello","world","hello,world"]', 'error');

// String.prototype.split$number

console.assert(JSON.stringify('1,2,3,4,5'.split$number()) === '[1,2,3,4,5]', 'error');
console.assert(JSON.stringify('1 2 3 4 5'.split$number(' ')) === '[1,2,3,4,5]', 'error');

// String.prototype.split$segment

console.assert(JSON.stringify(string1.split$segment()) === '["h","e","l","l","o"," ","w","o","r","l","d"]', 'error');
console.assert(JSON.stringify(string1.split$segment(3)) === '["hel","lo ","wor","ld"]', 'error');

// String.prototype.sprintf

console.assert('%d * %d = %d'.sprintf(2,3,6) === '2 * 3 = 6', 'error');
console.assert('%s say: %s.'.sprintf('jerry', 'hello') === 'jerry say: hello.', 'error');

// String.prototype.subOf

console.assert('<p>hello</p><p>world</p>'.subOf('<p>', '</p>') === 'hello', 'error');
console.assert('<p>hello</p><p>world</p>'.subOf('<p>', '</p>', 1) === 'world', 'error');
console.assert('<p>hello</p><p>world</p>'.subOf('<p>', '</p>', 0, 1) === 'world', 'error');

// String.prototype.lastSubOf

console.assert('<p>hello</p><p>world</p>'.lastSubOf('<p>', '</p>') === 'world', 'error');
console.assert('<p>hello</p><p>world</p>'.lastSubOf('<p>', '</p>', 1) === 'hello', 'error');
console.assert('<p>hello</p><p>world</p>'.lastSubOf('<p>', '</p>', 0, 1) === 'hello', 'error');

// String.prototype.camel2under

console.assert('helloWorld'.camel2under() === 'hello_world', 'error');

// String.prototype.under2camel

console.assert('hello_world'.under2camel() === 'helloWorld', 'error');

// String.prototype.camel2pascal

console.assert('helloWorld'.camel2pascal() === 'HelloWorld', 'error');

// String.prototype.pascal2camel

console.assert('HelloWorld'.pascal2camel() === 'helloWorld', 'error');

// String.prototype.under2kebab

console.assert('HelloWorld'.pascal2camel().camel2under().under2kebab() === 'hello-world', 'error');

// String.prototype.kebab2under

console.assert('hello-world'.kebab2under().under2camel().camel2pascal() === 'HelloWorld', 'error');

// String.prototype.baseConvert

console.assert('11'.baseConvert(16) === 17, 'error');
console.assert('11'.baseConvert(32) === 33, 'error');
console.assert('11'.baseConvert(64) === 65, 'error');

// String.prototype.toFixed0

console.assert('11.11'.fixed() === 11, 'error');
console.assert('11.11'.fixed(1) === 11.1, 'error');
console.assert('11.11'.fixed(2) === 11.11, 'error');

// String.prototype.toDate

console.assert('1970-01-01 00:00:00'.toDate().getTime() === -28800000, 'error');

// ==== base64 ====

// String.prototype.string2bytes

// String.prototype.hex2bytes

// String.prototype.base64decode
