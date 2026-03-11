// Copyright 2021 The dotcoo <dotcoo@163.com>. All rights reserved.

'use strict';

/* eslint-disable no-extend-native */

function d(prototype, properties) {
  return Object.defineProperties(prototype, Object.fromEntries(Object.keys(properties).map(key => [key, { value: properties[key], enumerable: false, configurable: true, writable: true }])));
}

function staticNew() {
  return {
    new: function(...args) {
      return new this(...args);
    },
  };
}

function adapterProps(...props) {
  const defines = {};
  for (const v of props) {
    const [o, n] = Array.isArray(v) ? v : [v, '$'+v];
    defines[n] = function() {
      return this[o];
    };
  }
  return defines;
}

function adapterMethods(prototype, thisIndex, returnArgs, ...methods) {
  const defines = {}, insert = (a, i, v) => (i !== null && a.splice(i >= 0 ? i : a.length + i + 1, 0, v), a);
  for (const v of methods) {
    const [o, n] = Array.isArray(v) ? v : [v, '$'+v+returnArgs.toString().replaceAll('-', '_')];
    if      (returnArgs === '')  { defines[n] = function(...args) { return prototype[o].apply(this, insert(args, thisIndex, this)); }; }
    else if (returnArgs === 't') { defines[n] = function(...args) { return prototype[o].apply(this, insert(args, thisIndex, this)), this; }; }
    else if (returnArgs === 'a') { defines[n] = function(...args) { return prototype[o].apply(this, insert(args, thisIndex, this)), args; }; }
    else if (returnArgs >= 0)    { defines[n] = function(...args) { return prototype[o].apply(this, insert(args, thisIndex, this)), args[returnArgs]; }; }
    else if (returnArgs < 0)     { defines[n] = function(...args) { return prototype[o].apply(this, insert(args, thisIndex, this)), args[args.length + returnArgs]; }; }
    else                         { throw Error('unreachable'); }
  }
  return defines;
}

function iteratorMethods(prototype, ...methods) {
  const defines = {};
  for (const v of methods) {
    const [o, n] = Array.isArray(v) ? v : [v, '$'+v];
    defines[n] = function(...args) {
      return [...prototype[o].apply(this, args)];
    };
  }
  return defines;
}

export {
  d,
  staticNew,
  adapterProps,
  adapterMethods,
  iteratorMethods,
};
