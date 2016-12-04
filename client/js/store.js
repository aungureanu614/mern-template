var redux = require("redux");
var createStore = redux.createStore; 
var applyMiddleware = redux.applyMiddleware;
var thunk = require("redux-thunk").default;

var reducer = require("./reducers/reducer");
var store = createStore(reducer, applyMiddleware(thunk));

module.exports = store;
