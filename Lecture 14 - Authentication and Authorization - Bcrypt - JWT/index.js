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

app.get('/compare', (req, res)=>{
    bcrypt.compare('this password', '$2b$10$vSlhYpvBEastbL4.H3YH2eSX.P5XAzKFe1gTearj9PkU2CoS8xnUq', (err, result)=>{
        console.log(result);
    })
    res.send('Decrypt password');
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})