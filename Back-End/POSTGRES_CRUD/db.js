const Sequelize=require('sequelize');

const sequelize = new Sequelize('post','postgres','01123581321',{
    host:'localhost',
    port:'5432',
    dialect:'postgres'
});

module.exports = sequelize;