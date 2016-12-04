var React = require("react");
var router = require("react-router");
var Router = router.Router;
var IndexRoute = router.IndexRoute;
var Route = router.Route;
var Redirect = router.Redirect;
var hashHistory = router.hashHistory;
var Link = router.Link;

var App = require("./components/app");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);


module.exports = routes;
