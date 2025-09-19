const express = require('express');
const app = express();
const path = require('path');
const multerconfig = require('./config/multerconfig');
const userModel = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res)=>{
    let user = await userModel.create({
        username: 'nimrazzz',
    })
    console.log(user);
    
    res.render('index', {user});
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})