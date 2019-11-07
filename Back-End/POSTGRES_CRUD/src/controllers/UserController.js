


//listagem
async function list(req,res){
    const user=await User.findAll({include:[{all:true}]});
    return res.json(user);
};

//busca

async function busca(req,res){
    const user=await User.findByPk(req.params.id);
    return res.json(user);
};

//Registrando no bd

async function registro(req,res){
    const user=await User.create(req.body);
    return res.json(user);

};

//update nos dados

async function atualiza(req,res){
    const user=await User.findByPk(req.params.id);
    await user.update(req.body);
    return res.json(user);
};

//delete

async function apaga(req,res){
    const user=await User.findByPk(req.params.id);
    await user.destroy();
    return res.send();
};