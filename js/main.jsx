var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var ToDo = require('./components/toDo.jsx');
var ToDoBanner = require('./components/toDoBanner.jsx');
var ToDoList = require('./components/toDoList.jsx');
var ToDoListItem = require('./components/toDoListItem.jsx');
var ToDoForm = require('./components/toDoForm.jsx');

ReactDOM.render(<ToDo />, document.getElementById('container'));