const express=require('express');

const routes=express.Router();

const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');

routes.get('/list/posts',PostController.list);
routes.get('/list/posts/:id',PostController.busca);
routes.post('/register/post',PostController.registro);
routes.put('/update/post/:id',PostController.atualiza);
routes.delete('/delete/post/:id',PostController.apaga);


routes.get('/list/users',UserController.list);
routes.get('/list/users/:id',UserController.busca);
routes.post('/register/user',UserController.registro);
routes.put('/update/user/:id',UserController.atualiza);
routes.delete('/delete/user/:id',UserController.apaga);




module.exports=routes;

