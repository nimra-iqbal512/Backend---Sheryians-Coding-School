const express = require('express');
const app = express();

// We have imported the model. Now we can do CRUD using this model.
const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send('Hellooooo');
});

app.listen(3000, ()=>{
    console.log('Al Ajal Ya Imam a.s');
});