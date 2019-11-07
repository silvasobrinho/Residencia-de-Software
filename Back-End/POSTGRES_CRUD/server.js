const bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//BLOCO DE CONEXÃO SEQUELIZE COM POSTGREES
/* const sequelize=new Sequelize('post','postgres','01123581321',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
}); */


//CRIAÇÃO DE TABELAS------------------------------------------------------ 

//CRIAÇÃO DA TABELA POST 

/* const Post =sequelize.define('post',{
    title:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT
    }
}); */

// CRIAÇÃO DA TABELA  USER
/*
const User=sequelize.define('users',{
    
    firstName:{
        type:Sequelize.STRING,
        required:true
    },
    lastName:{
        type:Sequelize.STRING,
        required:true
    },
    age:{
        type:Sequelize.INTEGER,
        required:true
    },
    email:{
        type:Sequelize.STRING,
        required:true
    }
});

// INSERIR DADOS NAS TABELAS CRIA UMA VEZ E DEPOIS COMENTA OS CRIATES E OS SYNCS
/*
Post.create({
    title:"nodeJS",
    content:"Teste criação do node",
});

User.create({
    firstName:"José",
    lastName:"Silva",
    age:"18",
    email:"josesilva@google.com"
})
*/

//Post.sync({force:true});
//User.sync({force:true});

//DEFINIÇÃO DE FUNÇÕES DE CONTROLE

//INSERINDO AS ROTAS 

//LISTANDO-------------------------------------------
/* 
app.get('/list/users',async(req,res)=>{
    const user=await User.findAll({include:[{all:true}]});
    return res.json(user);
})

app.get('/list/posts',async(req,res)=>{
    const post=await Post.findAll({});
    return res.json(post);
})

//BUSCA DETALHADA--------------------------------------

app.get('/list/users/:id',async(req,res)=>{
    const user=await User.findByPk(req.params.id);
    return res.json(user);
})

app.get('/list/posts/:id',async(req,res)=>{
    const post=await Post.findByPk(req.params.id);
    return res.json(post);
});

//---------------------------------------------------REGISTRANDO-----------------------------------------

app.post('/register/post',async(req,res)=>{
    const post=await Post.create(req.body);
    return res.json(post);

})
app.post('/register/user',async(req,res)=>{
    const user=await User.create(req.body);
    return res.json(user);

})
//-------------------------------------------------------ATUALIZANDO---------------------
app.put('/update/user/:id',async(req,res)=>{
    const user=await User.findByPk(req.params.id);
    await user.update(req.body);
    return res.json(user);
})

app.put('/update/post/:id',async(req,res)=>{
    const post=await Post.findByPk(req.params.id);
    await post.update(req.body);
    return res.json(post);
})

//--------------------------------------------------------------DELETANDO--------------------

app.delete('/delete/user/:id',async(req,res)=>{
    const user=await User.findByPk(req.params.id);
    await user.destroy();
    return res.send();
})

app.delete('/delete/post/:id',async(req,res)=>{
    const post=await Post.findByPk(req.params.id);
    await post.destroy();
    return res.send();
})
 */



app.listen(3001);