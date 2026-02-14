// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

class TextDecoder$ {
  decode(u8) {
    let s = '';
    for (let i = 0; i < u8.length; i++) {
      s += '%' + (u8[i] < 16 ? '0' : '') + u8[i].toString(16);
    }
    return decodeURIComponent(s);
  }
}

globalThis.TextDecoder$ = TextDecoder$;

typeof TextDecoder == 'undefined' && (globalThis.TextDecoder = TextDecoder$);
