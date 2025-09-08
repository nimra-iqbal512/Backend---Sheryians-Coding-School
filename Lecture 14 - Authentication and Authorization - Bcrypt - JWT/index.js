const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/', (req, res)=>{
    // Set cookie
    res.cookie("name", "nimra");    //Once this cookie is set in browser. Ab browser sy koi b request ae gi, to yh cookie b us request k sath khud hi chali jaye gi 
    res.send("done");
})

app.get('/read', (req, res)=>{
    console.log(req.cookies);   //kiu k browser mai cookies already store hai. Ab jesy hi browser sy '/read' request nikly gi, to yeh cookie b sath jaye gi, is liye hum is cookies ko is path py b read kr skty
    res.send('Read page');
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})