const Sequelize = require('sequelize');


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

module.exports = User;