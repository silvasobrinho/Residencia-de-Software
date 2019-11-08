const express=require('express');
const Sequelize = require('sequelize');
const requireDir=require('require-dir');
const bodyParser = require('body-parser');
const app=express();

const routes = require('./src/router');
const bd = require('./db')
requireDir("./src/models");

app.use(express.json());

app.use('/list',require('./src/router'));


bd.authenticate()
    .then(()=> console.log("Conectado ao banco..."))
    .catch(err => console.log("Error: ",err));



module.exports = app;


app.listen(3001);