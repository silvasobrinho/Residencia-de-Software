const Sequelize = require('sequelize')
const bd = require('../../db');

const Post = bd.define('posts',{
    title:{
        type: Sequelize.STRING
    },
    content:{
        type: Sequelize.TEXT
    }
});

module.exports = Post;