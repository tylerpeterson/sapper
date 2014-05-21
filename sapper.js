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

  result.traceId = params.traceId;
  result.spanId = params.spanId;
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
