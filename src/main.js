// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

typeof window === 'undefined' && require('../lib');

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
    { id: 6, pid: 2, name: '1-6' },
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

// === Tree Object ===

console.log(list1.clone0().toTree());
console.log(list2.clone0().toTree());
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

// === Array.toMerge ===

const l = [
  { id: 1, name: '1', cid: 1, cname: 'a' },
  { id: 2, name: '2', cid: 1, cname: 'a' },
  { id: 3, name: '3', cid: 1, cname: 'a' },
  { id: 4, name: '4', cid: 2, cname: 'b' },
  { id: 5, name: '5', cid: 2, cname: 'b' },
  { id: 6, name: '6', cid: 2, cname: 'b' },
];
console.log('Array.toMerge', l.toMerge(v => v.cid));
