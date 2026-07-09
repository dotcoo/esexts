// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew } from './util.js';

export function parse(url) {
  const match = url.match(/^([^:\/?#.]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?([^:\/?#]*)(?::(\d*))?)?([^?#]*)(\?[^#]*)?(#.*)?$/);
  if (!match) throw new TypeError('Invalid URL');
  const [, protocol = '', username = '', password = '', hostname = '', port = '', pathname = '', search = '', hash = ''] = match;
  return { protocol, username, password, hostname, port, pathname: pathname || (hostname ? '/' : ''), search, hash };
}

export function resolve(relative, base) {
  if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(relative)) return relative;

  if (relative.startsWith('//')) return (base.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:/)?.[0] ?? 'http:') + relative;

  const baseUrl = new URL(base);
  if (relative.startsWith('/')) {
    return baseUrl.protocol + '//' + baseUrl.host + relative;
  }
  if (relative.startsWith('?')) {
    return baseUrl.protocol + '//' + baseUrl.host + baseUrl.pathname + relative;
  }
  if (relative.startsWith('#')) {
    return baseUrl.protocol + '//' + baseUrl.host + baseUrl.pathname + baseUrl.search + relative;
  }

  let basePath = baseUrl.pathname;
  if (!basePath.endsWith('/')) basePath += '/';
  const newPath = basePath + relative;
  const parts = newPath.split('/');
  const resolved = [];
  for (const p of parts) {
    if (p === '..') { resolved.pop(); } else if (p !== '.') { resolved.push(p); }
  }
  return baseUrl.protocol + '//' + baseUrl.host + resolved.join('/');
}

export class URL {
  static createObjectURL(object) {
    throw new Error('Not implemented');
  }

  static revokeObjectURL(objectURL) {}

  static canParse(url) {
    try {
      parse(url);
      return true;
    } catch(e) {
      return false;
    }
  }

  static parse(url, base = undefined) {
    return new URL(url, base);
  }

  #protocol = '';
  #username = '';
  #password = '';
  #hostname = '';
  #port = '';
  #pathname = '';
  #search = '';
  #hash = '';
  #searchParams = null;

  constructor(url, base = undefined) {
    this.href = base ? resolve(base instanceof URL ? base.href : baseurl, fullUrl) : url;
  }

  set href(url) {
    const parsed = parse(url);
    this.#protocol = parsed.protocol;
    this.#username = parsed.username;
    this.#password = parsed.password;
    this.#hostname = parsed.hostname;
    this.#port = parsed.port;
    this.#pathname = parsed.pathname;
    this.#search = parsed.search;
    this.#hash = parsed.hash;
    this.#searchParams = new URLSearchParams(this.#search);
  }
  get href() {
    const port = this.#port ? ':' + this.#port : '';
    const auth = this.#username || this.#password ? this.#username + (this.#password ? ':' + this.#password : '') + '@' : '';
    const path = this.#pathname || '/';
    return this.#protocol + '//' + auth + this.#hostname + port + path + this.#search + this.#hash;
  }

  set origin(value) {}
  get origin() {
    if (!this.#hostname) return 'null';
    const port = this.#port && !((this.#protocol === 'http:' && this.#port === '80') || (this.#protocol === 'https:' && this.#port === '443')) ? ':' + this.#port : '';
    return this.#protocol + '//' + this.#hostname + port;
  }

  set protocol(value) { this.#protocol = value.endsWith(':') ? value : value + ':'; }
  get protocol() { return this.#protocol; }

  set username(value) { this.#username = value; this._invalidate(); }
  get username() { return this.#username; }

  set password(value) { this.#password = value; this._invalidate(); }
  get password() { return this.#password; }

  set host(value) { }
  get host() { return this.#hostname + (this.port ? ':' + this.port : ''); }

  set hostname(value) { this.#hostname = value; this._invalidate(); }
  get hostname() { return this.#hostname; }

  set port(value) { this.#port = value; }
  get port() { return this.#port; }

  set pathname(value) { this.#pathname = v.startsWith('/') ? value : '/' + value; }
  get pathname() { return this.#pathname; }

  set search(value) {
    this.#search = value ? value.startsWith('?') ? v : '?' + v : '';
    this.#searchParams = new URLSearchParams(this.#search);
  }
  get search() { return this.#search; }

  set hash(value) { this.#hash = value ? value.startsWith('#') ? v : '#' + v : ''; }
  get hash() { return this.#hash; }

  set searchParams(searchParams) { }
  get searchParams() { return this.#searchParams; }

  toString() { return this.href; }

  toJSON() { return this.href; }
}

if (typeof globalThis.URL === 'undefined') {
  globalThis.URL = URL;
}

d(globalThis.URL, {
  ...staticNew(),
});
