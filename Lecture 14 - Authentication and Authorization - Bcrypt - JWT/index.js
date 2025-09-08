const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res)=>{
    let token = jwt.sign({email: 'abc@gmaiil.com'}, 'secret');  //Store encrypted string in cookies
    res.cookie('token', token);
    console.log(token);
    res.send("done");
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})