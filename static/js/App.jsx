'use strict'

var React = require('react')
var dispatcher = require('./dispatcher/AppDispatcher')

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText, index) {
			return <li key={index + itemText}>{itemText}</li>;
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

module.exports = React.createClass({
    displayName: 'HelloReact',
	getInitialState: function() {
		return {items: [], text: ''};
	},
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		if(this.state.text && this.state.text!="") {
			var nextItems = this.state.items.concat([this.state.text]);
			var nextText = '';
			
			this.setState({
				items: nextItems, 
				text: nextText
			});
		}
	},
	render: function() {
		return (
			<div>
				<h3>Hello React</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
				<TodoList items={this.state.items} />
			</div>
		);
	}
})