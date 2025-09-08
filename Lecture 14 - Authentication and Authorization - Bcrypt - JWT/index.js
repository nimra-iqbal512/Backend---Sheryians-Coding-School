const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get('/', (req, res)=>{
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash('this password', salt, (err, hash)=>{
            console.log(salt);
            console.log(hash);
        })
    } );
    res.send("done");
})

app.get('/read', (req, res)=>{
    res.send('Read page');
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})