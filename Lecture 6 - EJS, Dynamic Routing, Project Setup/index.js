// const express = require('express');
// const app = express();
// const path = require('path');

// // These parsers help us to use form
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// // console.log(__dirname);
// // console.log(__dirname + '/public')
// app.use(express.static(path.join(__dirname, 'public')));  //All static files(Images, videos, .css files, .js files) would be in 'public' folder. 

// //ejs pages will be rendered
// app.set('view engine', 'ejs');

// // First route
// app.get("/", (req, res)=>{
//     // res.send("Its working");
//     res.render("index");    //This page 'index or index.ejs' must be in 'views'
// });

// // giving callback with server
// app.listen(3000, ()=>{
//     console.log('Ya Ali Madad');
// })


// ===========================
// Dynamic routing

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get("/profile/:username", (req, res)=>{
    console.log(req.params.username);
    // res.send('Working ' + req.params.username);
    res.send(`Working, ${req.params.username}`);
});

app.get("/profile/:username/:age", (req, res)=>{
    res.send(`Working, ${req.params.username}, ${req.params.age}`);
});

app.listen(3000, ()=>{
    console.log("Ya Ali Madad");
})