var React = require("react");
var connect = require("react-redux").connect;
var router = require("react-router");
var hashHistory = router.hashHistory; 

var actions = require("../actions/actions");

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        {this.props.children}
        
      </div>
    );
  }
});

module.exports = App;
