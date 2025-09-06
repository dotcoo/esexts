// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Number ======

// ====== Number.prototype ======

// Number.prototype.ceil

const number1 = 1.456, number2 = 1.678;

console.assert(number1.ceil() === 2, 'error');

// Number.prototype.floor

console.assert(number1.floor() === 1, 'error');

// Number.prototype.trunc

console.assert(number1.trunc() === 1, 'error');

// Number.prototype.abs

console.assert(number1.abs() === 1.456, 'error');
console.assert((-number1).abs() === 1.456, 'error');

// Number.prototype.max

console.assert(number1.max(number2) === number2, 'error');

// Number.prototype.min

console.assert(number1.min(number2) === number1, 'error');

// Number.prototype.baseConvert

console.assert((16).baseConvert(16) === '10', 'error');
console.assert((32).baseConvert(32) === '10', 'error');
console.assert((64).baseConvert(64) === '10', 'error');

// Number.prototype.round

console.assert(number2.round() === 2, 'error');
console.assert(number2.round(1) === 1.7, 'error');
console.assert(number2.round(2) === 1.68, 'error');

// Number.prototype.toFixed0

console.assert(number1.toFixed0() === 1, 'error');
console.assert(number1.toFixed0(1) === 1.5, 'error');
console.assert(number1.toFixed0(2) === 1.46, 'error');

// Number.prototype.toDate

console.assert((1).toDate().getTime() === 1000, 'error');
console.assert((2500000001).toDate().getTime() === 2500000001, 'error');
