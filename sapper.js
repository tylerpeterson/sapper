/* jshint node: true */

/*
 * 
 */

"use strict";

var util = require('util');

/*
 * The metaData of a span are all about identifying it and tieing it into the larger tree of spans.
 */
var metaData = ['traceId', 'spanId', 'parentId', 'name'];

/*
 * These special annotation messages are unlike other annotations:
 *   + there can be at most one of each
 *   + they are never dropped to conserve space
 * The span lets you read and set them like other properties, but they are still just timestamped messages.
 * That is, you should always set those properties to timestamps from Date.now().
 */
var specialAnnotations = ['start', 'clientSend', 'serverReceive', 'serverSend', 'clientReceive', 'end'];

/*
 * Each of these constructor params will be read from the params object and stored privately in the span.
 * Each of these properties can also be set directly on the span. They can only be set once.
 */
var properties = metaData.concat(specialAnnotations);

function span(params) {
  var privates = {};

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

  properties.forEach(function (name) {
    initPrivate(name, params);
  });

  return result;
}

function genId() {

}

module.exports = {
  span: span,
  genId: genId
};
