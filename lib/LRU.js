// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew } from './util';

class LRU extends Map {
  constructor(capacity) {
    super();
    this.capacity = capacity;
  }

  get(key) {
    if (!super.has(key)) { return null; }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  getOrInsert(key, defaultValue) {
    if (!super.has(key)) { super.set(key, defaultValue); }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  getOrInsertComputed(key, callback) {
    if (!super.has(key)) { super.set(key, callback(key)); }
    const value = super.get(key);
    // 删除后重新插入，使其位于迭代末尾（最新）
    super.delete(key);
    super.set(key, value);
    return value;
  }

  async getOrInsertComputedAsync(key, callback) {
    if (!super.has(key)) { super.set(key, await callback(key)); }
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

d(LRU, {
  ...staticNew(),
});

if (typeof globalThis.LRU == 'undefined') {
  globalThis.LRU = LRU;
}
