/* jshint node: true */

/*
 * 
 */

"use strict";

function span(params) {
  var result = Object.create({
    annotate: function (msg) {

    }
  });

  params = params || {};

  // Span Properties
  result.traceId = params.traceId;
  result.spanId = params.spanId;
  result.parentId = params.parentId;

  // Special Annotations
  result.start = params.start;
  result.name = params.name;

  return result;
}

function genId() {

}

module.exports = {
  span: span,
  genId: genId
};
