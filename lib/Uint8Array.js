// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

import { d, staticNew } from './util';

d(Uint8Array, {
  ...staticNew(),
  fromString: function(str) {
    return new TextEncoder().encode(str);
  },
  fromHex$: function(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i += 2) {
      bytes.push(Number.parseInt(str.substring(i, i+2), 16));
    }
    return new Uint8Array(bytes);
  },
  fromBase64$: function(str) {
    const bytes = [], maps = {}, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (let i = 0; i < chars.length; i++) { maps[chars.charAt(i)] = i; }
    const l =  str.charAt(str.length - 1) != '=' ? str.length : str.charAt(str.length - 2) != '=' ? str.length - 1 : str.length - 2;
    for (let i = 3; i < l; i += 4) {
      const n = (maps[str.charAt(i-3)] << 18) + (maps[str.charAt(i-2)] << 12) + (maps[str.charAt(i-1)] << 6) + maps[str.charAt(i)];
      bytes.push((n & 0xFF0000) >> 16, (n & 0xFF00) >> 8, n & 0xFF);
    }
    if (l % 4 == 3) {
      const n = (maps[str.charAt(l-3)] << 18) + (maps[str.charAt(l-2)] << 12) + (maps[str.charAt(l-1)] << 6);
      bytes.push((n & 0xFF0000) >> 16, (n & 0xFF00) >> 8);
    } else if (l % 4 == 2) {
      const n = (maps[str.charAt(l-2)] << 18) + (maps[str.charAt(l-1)] << 12);
      bytes.push((n & 0xFF0000) >> 16);
    }
    return new Uint8Array(bytes);
  },
});

d(Uint8Array.prototype, {
  setFromString(str, targetOffset = 0) {
    const u8 = Uint8Array.fromString(str);
    this.set(u8, targetOffset);
    return { read: u8.length, written: u8.length };
  },
  setFromHex$(str, targetOffset = 0) {
    const u8 = Uint8Array.fromHex(str);
    this.set(u8, targetOffset);
    return { read: u8.length, written: u8.length };
  },
  setFromBase64$(str, targetOffset = 0) {
    const u8 = Uint8Array.fromBase64(str);
    this.set(u8, targetOffset);
    return { read: u8.length, written: u8.length };
  },
  toString: function() {
    return new TextDecoder().decode(this);
  },
  toHex$: function() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += (this[i] < 16 ? '0' : '') + this[i].toString(16);
    }
    return s;
  },
  toBase64$: function() {
    let b64 = '', maps = {}, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (let i = 0; i < chars.length; i++) { maps[chars.charAt(i)] = i; }
    for (let i = 2; i < this.length; i += 3) {
      const n = (this[i-2] << 16) + (this[i-1] << 8) + this[i];
      b64 += chars.charAt((n & 0xFC0000) >> 18) + chars.charAt((n & 0x3F000) >> 12) + chars.charAt((n & 0xFC0) >> 6) + chars.charAt(n & 0x3F);
    }
    if (this.length % 3 == 2) {
      const n = (this[this.length-2] << 16) + (this[this.length-1] << 8);
      b64 += chars.charAt((n & 0xFC0000) >> 18) + chars.charAt((n & 0x3F000) >> 12) + chars.charAt((n & 0xFC0) >> 6) + '=';
    } else if (this.length % 3 == 1) {
      const n = this[this.length-1] << 16;
      b64 += chars.charAt((n & 0xFC0000) >> 18) + chars.charAt((n & 0x3F000) >> 12) + '==';
    }
    return b64;
  },
  toArray: function() {
    return new Array(...this);
  },
});

if (typeof Uint8Array.fromBase64 == 'undefined') {
  Uint8Array.fromHex = Uint8Array.fromHex$;
  Uint8Array.fromBase64 = Uint8Array.fromBase64$;
  Uint8Array.prototype.setFromHex = Uint8Array.prototype.setFromHex$;
  Uint8Array.prototype.setFromBase64 = Uint8Array.prototype.setFromBase64$;
  Uint8Array.prototype.toHex = Uint8Array.prototype.toHex$;
  Uint8Array.prototype.toBase64 = Uint8Array.prototype.toBase64$;
}
