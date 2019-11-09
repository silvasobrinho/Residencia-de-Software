const Sequelize = require ('sequelize');
const User = require('../models/user');


module.exports={
    //listagem
    async list(req,res){
        const user = await User.findAll();
        return res.json(user);
    },

//busca

async busca(req,res){
    const user=await User.findByPk(req.params.id);
    return res.json(user);
},

//Registrando no bd

async registro(req,res){
    const user=await User.create(req.body);
    return res.json(user);

},

//update nos dados

async atualiza(req,res){
    const user=await User.findByPk(req.params.id);
    await user.update(req.body);
    return res.json(user);
},

//delete

async apaga(req,res){
    const user=await User.findByPk(req.params.id);
    await user.destroy();
    return res.send();
}
};

