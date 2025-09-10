const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username: "Nimra",
        age: 25,
        email: "nimra@gmail.com"
    });
    res.send(user);
});

app.listen(3000, ()=>{
    console.log('Ya Ali a.s');
});