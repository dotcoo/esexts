// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

// ====== Iterator ======

// ====== Iterator.prototype ======

// Iterator.prototype.toArray

console.assert(JSON.stringify([1,2,3].values().toArray()) === '[1,2,3]', 'error');
