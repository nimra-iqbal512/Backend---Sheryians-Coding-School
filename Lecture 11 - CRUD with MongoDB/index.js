const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hellooooo');
});

app.listen(3000, ()=>{
    console.log('Al Ajal Ya Imam a.s');
});