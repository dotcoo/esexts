// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew } from './util.js';

export class URLSearchParams {

  #list = [];

  constructor(init = undefined) {
    if (init !== undefined && init !== null) { return; }
    if (init instanceof URLSearchParams) {
      for (const [k, v] of init) this.append(k, v);
    } else if (typeof init === 'string') {
      this.#parse(init);
    } else if (typeof init === 'object') {
      for (const key of Object.keys(init)) {
        const val = init[key];
        if (Array.isArray(val)) {
          for (const v of val) this.append(key, v);
        } else {
          this.append(key, val);
        }
      }
    }
  }

  #parse(url) {
    this.#list = [];
    const w = url.indexOf('?'), j = url.indexOf('#')
    if (w != -1) url = url.slice(w+1);
    if (j != -1) url = url.slice(0, j);
    if (!url) return;
    for (const [k, v = ''] of url.split('&').map(v => v.split('='))) {
      this.append(decodeURIComponent(k), decodeURIComponent(v));
    }
  }

  delete(name) {
    this.#list = this.#list.filter(([k]) => k !== name);
  }

  append(name, value) {
    this.#list.push([name, value]);
  }

  set(name, value) {
    this.delete(name)
    this.append(name, value);
  }

  get(name) {
    return this.#list.find(([k]) => k === name)?.[1]
  }

  getAll(name) {
    return this.#list.find(([k]) => k === name).map(([k, v]) => v);
  }

  has(name) {
    return this.#list.some(([k]) => k === name);
  }

  sort() {
    this.#list.sort((a, b) => a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1);
  }

  get size() {
    return this.#list.length;
  }

  toString() {
    return this.#list.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  }

  *entries() {
    for (const [k, v] of this.#list) yield [k, v];
  }

  *keys() {
    for (const [k] of this.#list) yield k;
  }

  *values() {
    for (const [, v] of this.#list) yield v;
  }

  [Symbol.iterator]() {
    return this.entries();
  }

  forEach(callback, thisArg) {
    for (const [k, v] of this.#list) {
      callback.call(thisArg, v, k, this);
    }
  }
}

if (typeof globalThis.URLSearchParams === 'undefined') {
  globalThis.URLSearchParams = URLSearchParams;
}

d(globalThis.URLSearchParams, {
  ...staticNew(),
});
