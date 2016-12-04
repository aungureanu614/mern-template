var React = require("react");
var router = require("react-router");

var actions = require("../actions/actions");

var initialState = {
};

var reducer = function(state, action){

  state = state || initialState;
  switch(action.type){
    case actions.SIMPLE_SUCCESS:
      return Object.assign({}, state, {success: true});
    case actions.SIMPLE_ERROR:
      return Object.assign({}, state, {success: false});
    default: 
      return state;
  }
}

module.exports = reducer;
