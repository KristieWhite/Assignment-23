var Backbone = require('../backbone-parse');

var ToDoList = Backbone.Model.extend({
	initialize: function() {
		console.log("a new list has been created");
	},
	defaults: {
		items: null,
	},
	_parse_class_name: "ToDoList"
});

module.exports = ToDoList;