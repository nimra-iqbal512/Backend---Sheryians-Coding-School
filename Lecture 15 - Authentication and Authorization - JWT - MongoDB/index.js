const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const path = require('path');

// Set ejs as view engine
app.set('view engine', 'ejs');
// To read forms
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// To read static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})