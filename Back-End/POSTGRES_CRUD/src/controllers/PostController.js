


//listagem
async function list(req,res){
    const post=await Post.findAll({});
    return res.json(post);
};

//busca

async function busca(req,res){
    const post=await Post.findByPk(req.params.id);
    return res.json(post);
};

//Registrando no bd

async function registro(req,res){
    const post=await Post.create(req.body);
    return res.json(post);

};

//update nos dados

async function atualiza(req,res){
    const post=await Post.findByPk(req.params.id);
    await post.update(req.body);
    return res.json(post);
};

//delete

async function  apaga(req,res){
    const post=await Post.findByPk(req.params.id);
    await post.destroy();
    return res.send();
};