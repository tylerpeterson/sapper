/* jshint node: true */

/*
 * 
 */

"use strict";

var util = require('util');

function span(params) {
  var privates = {};

  function makeDescriptor(key) {
    return {
      get: function () { return privates[key]; },
      set: function (val) {
        if (privates[key] !== null) throw new Error(util.format('Illegal State: %s is already set', key));
        privates[key] = val;
      }
    };
  }

  function initPrivate(key, params) {
    privates[key] = params[key] === undefined ? null : params[key];
  }

  var result = Object.create({
    annotate: function (msg) {

    }
  }, {
    traceId: makeDescriptor('traceId'),
    spanId: makeDescriptor('spanId'),
    parentId: makeDescriptor('parentId')
  });

  params = params || {};

  // Span Properties
  initPrivate('traceId', params);
  initPrivate('spanId', params);
  initPrivate('parentId', params);

  // Special Annotations
  result.start = params.start;
  result.name = params.name;
  result.serverReceive = params.serverReceive;

  return result;
}

function genId() {

}

module.exports = {
  span: span,
  genId: genId
};
