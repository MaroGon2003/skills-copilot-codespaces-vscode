// Create web server 
// Create web server  to handle requests
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/comments');

// Create a schema
var commentSchema = mongoose.Schema({
	name: String,
	comment: String
});

// Create a model based on the schema
var Comment = mongoose.model('Comment', commentSchema);

// Create a new comment in the database
// Comment.create({name: 'John', comment: 'comment 1'});

// Create web server
var app = express();

// Add middleware to parse JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add middleware to