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

app.get('/read', (req, res)=>{
    console.log(req.cookies.token); //Encrypted string stored in cookies
    let data = jwt.verify(req.cookies.token, 'secret'); //Using JWT, we can decrypt and get the actual data stored in browser/cookies
    console.log(data);
    res.send("read");
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})