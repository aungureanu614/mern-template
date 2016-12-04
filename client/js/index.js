var React = require("react");
var ReactDOM = require("react-dom");
var Provider = require("react-redux").Provider;

var store = require("./store"); 
var routes = require("./routes");

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>
    , document.getElementById("app"));
});