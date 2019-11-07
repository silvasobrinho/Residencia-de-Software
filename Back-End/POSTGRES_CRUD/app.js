const express=require('express');
const requireDir=require('require-dir');
const app=express();


requireDir("./src/models");
var db = require('./db');
app.use(express.json());

app.use('/api',require('./src/routes'));

var UserController = require('./src/controllers/UserController');
app.use('/src/users', UserController);

var PostController = require('./src/controllers/PostController');
app.use('/src/posts', PostController);

module.exports = app;


app.listen(3001);