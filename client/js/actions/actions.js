var React = require("react");

var SIMPLE_SUCCESS = "SIMPLE_SUCCESS";
var simpleSuccess = function() {
  return {
    type: SIMPLE_SUCCESS
  };
}

var SIMPLE_ERROR = "SIMPLE_ERROR";
var simpleError = function() {
  return {
    type: SIMPLE_ERROR
  };
}

exports.SIMPLE_SUCCESS = SIMPLE_SUCCESS;
exports.simpleSuccess = simpleSuccess;
exports.SIMPLE_ERROR = SIMPLE_ERROR;
exports.simpleError = simpleError;

