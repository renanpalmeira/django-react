'use strict'

var ApiData = require('./ApiData')
var api = require('./utils/api')
var App = require('./components/App.react')
var React = require('react')

ApiData.init()

api.getProductData();

React.render(
	<App />, 
	document.getElementById('content')
)