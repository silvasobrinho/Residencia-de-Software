
const express=require('express');// carrega o modulo do express

const mongoose=require('mongoose');//carrega o modulo do mangoose

const app=express();//instacia uma variável app do modulo express
const cors = require("cors");

app.use(express.json());//Insomnia para usra o metodo post 

const requireDir=require('require-dir');//Reegistrar todos o diretorios( NECESSÁRIO NPM INSTALL REQUIRE-DIR    )

requireDir("./src/models");//Carrega todos os diretórios models




//CONFIGURAÇÃO DO MONGOOSE

mongoose.connect('mongodb://localhost:27017:27017/nodeapi',{useUnifiedTopology:true,useNewUrlParser:true});

app.use('/api',require('./src/routes'));

app.use(cors());

app.listen(3001);

//Conecção com o mongo Mongodb conectando com a porta 

app.get("/",(req,res)=>{
/*
    
    Product.create({
        title:'Aplle',
        description:'MacBook',
        url:'http://www.apple.com',
    });
*/
    return res.send('Pagina inicial node-api sem servidor');
})









/*
app.get('/',(req,res)=>{
    res.send('OPA ');
})
app.listen(3031);
*/
