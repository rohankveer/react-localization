import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var T = require('i18n-react').default;
var en = require('./locale/en.yml');
var fr = require('./locale/fr.yml');

var queryParams = function () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();

T.setTexts(eval(queryParams.lang));

ReactDOM.render(<Router history={browserHistory}>
<Route path="/" components={App}/>
</Router>, document.getElementById('app'));