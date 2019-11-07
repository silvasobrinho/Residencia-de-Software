const Sequelize = require('sequelize')

const Post =sequelize.define('post',{
    title:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT
    }
});

module.exports = Post;