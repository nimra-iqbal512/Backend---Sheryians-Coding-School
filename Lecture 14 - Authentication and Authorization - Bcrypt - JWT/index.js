const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    // Set cookie
    res.cookie("name", "nimra");
    res.send("done");
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})