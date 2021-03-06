const Sequelize = require('sequelize');
const bd = require('../../db');


const User= bd.define('users',{
    
    firstName:{
        type: Sequelize.STRING,
        required:true
    },
    lastName:{
        type: Sequelize.STRING,
        required:true
    },
    age:{
        type: Sequelize.INTEGER,
        required:true
    },
    email:{
        type: Sequelize.STRING,
        required:true
    }
});
// Executar na primeira vez somente   User.sync({ force: true });
module.exports = User;