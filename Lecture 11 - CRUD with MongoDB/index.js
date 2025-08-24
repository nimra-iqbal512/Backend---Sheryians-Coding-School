const express = require('express');
const app = express();

// We have imported the model. Now we can do CRUD using this model.
const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send('Hello');
});

app.get('/create', async(req, res)=>{
    let created_user = await userModel.create({
        name: "ashmal",
        email: "nimra@gmail.com",
        username: 'nimra iqbal'
    })
    res.send(created_user);
});

app.listen(3000, ()=>{
    console.log('Al Ajal Ya Imam a.s');
});