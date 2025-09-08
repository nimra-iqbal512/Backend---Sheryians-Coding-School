const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('Hello Worlld');
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})