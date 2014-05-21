/* jshint node: true */

/*
 * 
 */

"use strict";

function span(traceId, spanId) {
  var result = Object.create({
    annotate: function (msg) {

    }
  });

  result.traceId = traceId;
  result.spanId = spanId;
  
  return result;
}

function genId() {

}

module.exports = {
  span: span,
  genId: genId
};
