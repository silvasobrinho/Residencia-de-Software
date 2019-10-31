const express = require('express');
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb://localhost:27017/nodeapi',{useUnifiedTopology: true, useNewUrlParser: true});
app.get('/',(req,res) => {
    res.send("Hello Baby Shark!!")
});

app.listen(3001);
//Para rodar usare npm run dev