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

function propAlias(...props) {
  const defines = {};
  for (const [p, a] of props) {
    defines[a] = function() {
      return this[p];
    };
  }
  return defines;
}

function methodAlias(...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      return this[m](...args);
    };
  }
  return defines;
}

function methodAliasIterator(...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      return [...this[m](...args)];
    };
  }
  return defines;
}

function returnThis(...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      this[m](...args);
      return this;
    };
  }
  return defines;
}

function returnArg0(...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      this[m](...args);
      return args[0];
    };
  }
  return defines;
}

function returnArgs(...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      this[m](...args);
      return args;
    };
  }
  return defines;
}

function extendMethods(obj, ...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = obj[m];
  }
  return defines;
}

function adapterMethods(obj, ...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      return obj[m](this, ...args);
    };
  }
  return defines;
}

function adapterMethodsReturnThis(obj, ...methods) {
  const defines = {};
  for (const [m, a] of methods) {
    defines[a] = function(...args) {
      obj[m](this, ...args);
      return this;
    };
  }
  return defines;
}

export {
  d,
  staticNew,
  propAlias,
  methodAlias,
  methodAliasIterator,
  returnThis,
  returnArg0,
  returnArgs,
  extendMethods,
  adapterMethods,
  adapterMethodsReturnThis,
};
