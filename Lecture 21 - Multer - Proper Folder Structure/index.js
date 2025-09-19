const express = require('express');
const app = express();
const path = require('path');
const multerconfig = require('./config/multerconfig');
const userModel = require('./models/user');
const upload = require('./config/multerconfig');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username: 'nimrazzz',
    })
    console.log(user);
    res.redirect('/');
})

app.get('/', async (req, res)=>{
    let user = await userModel.findOne({username: 'nimrazzz'});
    if(user){
        res.render('index', {user});
    }else{
        res.redirect('/create');
    }
})

app.get("/profile/upload", (req, res)=>{
    res.render("profileUpload");
})

app.post("/upload", upload.single("image"), async (req, res)=>{
    console.log(req.file.filename);
    
    let user = await userModel.findOne({username: 'nimrazzz'}); //Update username with the id or email of logged in user
    user.profilepic = req.file.filename;
    await user.save();
    res.redirect('/');
})

app.listen(3000, ()=>{
    console.log('Ya Ali a.s Madad');
})