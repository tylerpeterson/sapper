/* jshint node: true */

/*
 * 
 */

"use strict";

var util = require('util');

function span(params) {
  var privates = {};
  var properties = ['traceId', 'spanId', 'parentId', 'name'];
  var descriptors = {};

  function makeDescriptor(key) {
    return {
      get: function () { return privates[key]; },
      set: function (val) {
        if (privates[key] !== null) throw new Error(util.format('Illegal State: %s is already set', key));
        privates[key] = val;
      }
    };
  }

  properties.forEach(function (name) {
    descriptors[name] = makeDescriptor(name);
  });

  function initPrivate(key, params) {
    privates[key] = params[key] === undefined ? null : params[key];
  }

  var result = Object.create({
    annotate: function (msg) {

    }
  }, descriptors);

  params = params || {};

  // Span Properties
  properties.forEach(function (name) {
    initPrivate(name, params);
  });

  // Special Annotations
  result.start = params.start;
  result.serverReceive = params.serverReceive;

  return result;
}

function genId() {

}

module.exports = {
  span: span,
  genId: genId
};
