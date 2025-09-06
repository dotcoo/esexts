// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== RegExp ======

const reg1 = RegExp.new('^\\d$'), reg2 = RegExp.new('^\\w$', 'i');

// RegExp.new

console.assert(reg1.test(6), 'error');

// ====== RegExp.prototype ======

// RegExp.prototype.toJSON

console.assert(JSON.stringify(reg1) === '"/^\\\\d$/"', 'error');
console.assert(JSON.stringify(reg2) === '"/^\\\\w$/i"', 'error');
