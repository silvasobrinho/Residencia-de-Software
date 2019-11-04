const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');



const app = express();
mongoose.connect('mongodb://localhost:27017/nodeapi',{useUnifiedTopology: true, useNewUrlParser: true});
/* 
require('./src/models/Product');  //importa so o model expecifico */
requireDir('./src/models');   // faz com que todos os arquivos da pasta sejam importados
const Product = mongoose.model('Product');

app.get('/',(req,res) => {
    Product.create({
        title: 'Apple',
        description: 'MacBook',
        url: 'http://www.apple.com'
    });
        return res.send("Págima Inicial node-api");
});

app.listen(3001);
//Para rodar usare npm run dev