// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

class TextEncoder$ {
  encode(str) {
    const bytes = [], e = encodeURIComponent(str);
    for (let i = 0; i < e.length;) {
      bytes.push(e.charAt(i) == '%' ? Number.parseInt(e.substring(i+1, i+=3), 16) : e.codePointAt(i++));
    }
    return new Uint8Array(bytes);
  }
}

globalThis.TextEncoder$ = TextEncoder$;

typeof TextEncoder == 'undefined' && (globalThis.TextEncoder = TextEncoder$);
