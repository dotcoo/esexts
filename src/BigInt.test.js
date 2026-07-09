// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== BigInt ======

// ====== BigInt.prototype ======

const bigInt1 = 1n, bigInt2 = 9007199254740992n;

// BigInt.prototype.toJSON

console.assert(JSON.stringify(bigInt1) === '1', 'error');
console.assert(JSON.stringify(bigInt2) === '"9007199254740992"', 'error');
