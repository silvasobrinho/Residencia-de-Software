const Sequelize=require('sequelize');

const sequelize = new Sequelize('posts','postgres','123',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
});

module.exports = sequelize;