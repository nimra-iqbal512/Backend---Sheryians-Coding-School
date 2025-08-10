const express = require('express');
const app = express();

// These parsers help us to use form
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ejs pages will be rendered
app.set('view engine', 'ejs');

// First route
app.get("/", (req, res)=>{
    res.send("Its working");
});

// giving callback with server
app.listen(3000, ()=>{
    console.log('Ya Ali Madad');
})