// Importações de modulos

const express=require('express');

const routes=express.Router();

const ProductController=require('./controllers/ProductController');

//Função 

routes.get('/products',ProductController.index);

routes.get('/products/:id',ProductController.show);

routes.put('/products/:id/',ProductController.update);

routes.delete('/products/:id/',ProductController.destroy);

routes.post('/products',ProductController.store);




routes.get("/",(req,res)=>{

    Product.create({
        title:'Aplle',
        description:'MacBook',
        url:'http://www.apple.com',
    });

    return res.send('Pagina inicial node-api na rota');
})






//Exportação dos modulod

module.exports=routes;
