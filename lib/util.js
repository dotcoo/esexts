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

function adapterProps(...alias) {
  const defines = {};
  for (const [o, n] of alias) {
    defines[n] = function() {
      return this[o];
    };
  }
  return defines;
}

function adapterMethods(prototype, thisIndex, returnArgs, ...alias) {
  const defines = {};
  for (const [o, n] of alias) {
    // if (thisIndex === null && returnArgs === null)  { defines[n] = prototype[o]; continue; }
    if (thisIndex === null && returnArgs === null)  { defines[n] = function(...args) { return prototype[o].apply(this, args); }; continue; }
    if (thisIndex === null && returnArgs === false) { defines[n] = function(...args) { return prototype[o].apply(this, args), this; }; continue; }
    if (thisIndex === null && returnArgs === true)  { defines[n] = function(...args) { return prototype[o].apply(this, args), args; }; continue; }
    if (thisIndex === null && returnArgs > 0)       { defines[n] = function(...args) { return prototype[o].apply(this, args), args[returnArgs - 1]; }; continue; }
    if (thisIndex === null && returnArgs < 0)       { defines[n] = function(...args) { return prototype[o].apply(this, args), args[args.length + returnArgs + 1]; }; continue; }
    if (thisIndex !== null && returnArgs === null)  { defines[n] = function(...args) { return args.splice(thisIndex > 0 ? thisIndex - 1 : args.length + thisIndex + 1, 0, this), prototype[o].apply(this, args); }; continue; }
    if (thisIndex !== null && returnArgs === false) { defines[n] = function(...args) { return args.splice(thisIndex > 0 ? thisIndex - 1 : args.length + thisIndex + 1, 0, this), prototype[o].apply(this, args), this; }; continue; }
    if (thisIndex !== null && returnArgs === true)  { defines[n] = function(...args) { return args.splice(thisIndex > 0 ? thisIndex - 1 : args.length + thisIndex + 1, 0, this), prototype[o].apply(this, args), args; }; continue; }
    if (thisIndex !== null && returnArgs > 0)       { defines[n] = function(...args) { return args.splice(thisIndex > 0 ? thisIndex - 1 : args.length + thisIndex + 1, 0, this), prototype[o].apply(this, args), args[returnArgs - 1]; }; continue; }
    if (thisIndex !== null && returnArgs < 0)       { defines[n] = function(...args) { return args.splice(thisIndex > 0 ? thisIndex - 1 : args.length + thisIndex + 1, 0, this), prototype[o].apply(this, args), args[args.length + returnArgs + 1]; }; continue; }
    throw Error('unreachable');
  }
  return defines;
}

function iteratorMethods(prototype, ...alias) {
  const defines = {};
  for (const [o, n] of alias) {
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
