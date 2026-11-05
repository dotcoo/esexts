// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew } from './util.js';

export class LRU extends Map {
  constructor(iterable = [], capacity = 1000, callback = null) {
    super(iterable);
    this.capacity = capacity;
    this.callback = callback;
  }

  get(key) {
    if (!super.has(key)) { return null; }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  getOrInsert(key, defval) {
    if (!super.has(key)) { super.set(key, defval); }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  getOrInsertComputed(key, callback = undefined) {
    if (!super.has(key)) {
      const val = (callback ?? this.callback)(key);
      if (val === undefined) { return val; }
      super.set(key, val);
    }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  async getOrInsertComputedAsync(key, callback = undefined) {
    if (!super.has(key)) {
      const val = await (callback ?? this.callback)(key);
      if (val === undefined) { return val; }
      super.set(key, val);
    }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  set(key, value) {
    // 如果存在就删除，然后重新插入，使其位于迭代末尾（最新）
    if (super.has(key)) { super.delete(key); }
    super.set(key, value);
    // 删除最早插入的键（迭代的第一个）
    if (super.size > this.capacity) {
      super.delete(super.keys().next().value);
    }
  }

  put(key, value) {
    return this.set(key, value);
  }
}

if (typeof globalThis.LRU === 'undefined') {
  globalThis.LRU = LRU;
}

d(globalThis.LRU, {
  ...staticNew(),
});
