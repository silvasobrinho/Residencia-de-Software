//ICARREGAMENTO DO MODULO DO MONGOOSE 
const mongoose=require('mongoose');

// INSTANCIA DE SCHEMA
const ProductSchema=new mongoose.Schema({
//inserção de campos :title,description,url,cretae at()
//OBSERVAÇÃO , MONGODB BANCO DE DADOS NÃO RELACIONAL ,MAS SIM ORIENTADO A DOCUMENTAÇÃO
title:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
url:{
    type:String,
    require:true,
},
createAt:{
    type:Date,
    default:Date.now,
},
});

mongoose.model('Product',ProductSchema);
