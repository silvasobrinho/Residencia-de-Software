
const express=require('express');// carrega o modulo do express

const Sequelize = require('sequelize');

const bodyParser = require('body-parser');



const app = express();

app.use (bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const sequelize = new Sequelize
('posts','postgres','123',{
    host:'localhost',
    port: '5432',
    dialect: 'postgres'
});

const Post = sequelize.define('posts',{
    title:{
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
});

Post.create({
    title: "nodejs",
    content: "Teste criação do node"
});

const user = sequelize.define('users',{
    fristName:{
        type: Sequelize.STRING,
        required:true,
        },
        lastName:{
            type: Sequelize.STRING,
            required: true,
        },
        age:{
            type: Sequelize.INTEGER,
            required: true,
        },
        email: {
            type: Sequelize.STRING,
            required: true,
        }
});


user.create({
    fristName: "José",
    lastName: "Silva",
    age: '18',
    email: 'sgadiugsaiu@suhdiuas.com'
});


const post = await Post.findByPk(req.params.id);

await post.destroy();

await resizeBy.send();
});

Post.sync({ force:true});
Post.sync({ force:true});


app.listen(3001);