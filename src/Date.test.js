// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

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

// Date.prototype.format

console.assert(date3.format() === '2025-06-29 06:27:06', 'error');
console.assert(date3.format('y-m-d h:i:s') === '2025-06-29 06:27:06', 'error');
console.assert(date3.format('Y-M-D H:I:S') === '2025-6-29 6:27:6', 'error');

// Date.prototype.unix

console.assert(date3.unix() === 1751149626, 'error');

// Date.prototype.isLeapYear

console.assert(date3.isLeapYear() === false, 'error');

// Date.prototype.getMonthDay

console.assert(date3.getMonthDay() === 30, 'error');

// Date.prototype.expr

console.assert(date3.expr({ y: 1, m: 1, d: 1, h: 1, i: 1, s: 1 }).format() === '2026-07-30 07:28:07', 'error');

// Date.prototype.begin

console.assert(date3.begin().format() === '2025-06-29 00:00:00', 'error');
console.assert(date3.begin(1).format() === '2025-01-01 00:00:00', 'error');
console.assert(date3.begin(2).format() === '2025-06-01 00:00:00', 'error');
console.assert(date3.begin(3).format() === '2025-06-29 00:00:00', 'error');
console.assert(date3.begin(4).format() === '2025-06-29 06:00:00', 'error');
console.assert(date3.begin(5).format() === '2025-06-29 06:27:00', 'error');
console.assert(date3.begin(6).format() === '2025-06-29 06:27:06', 'error');

// Date.prototype.end

console.assert(date3.end().format() === '2025-06-29 23:59:59', 'error');
console.assert(date3.end(1).format() === '2025-12-31 23:59:59', 'error');
console.assert(date3.end(2).format() === '2025-06-30 23:59:59', 'error');
console.assert(date3.end(3).format() === '2025-06-29 23:59:59', 'error');
console.assert(date3.end(4).format() === '2025-06-29 06:59:59', 'error');
console.assert(date3.end(5).format() === '2025-06-29 06:27:59', 'error');
console.assert(date3.end(6).format() === '2025-06-29 06:27:06', 'error');

// Date.prototype.week

console.assert(date3.week(1, -1).format() === '2025-06-23 06:27:06', 'error');
console.assert(date3.week(1).format() === '2025-06-30 06:27:06', 'error');

// Date.prototype.toJSON

console.assert(JSON.stringify(date3) === '1751149626000', 'error');
