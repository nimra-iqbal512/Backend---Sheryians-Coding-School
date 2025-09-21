const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

let userModel = require('./models/user');
let postModel = require('./models/post');
let upload = require('./config/multerConfig')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.render('index');
});

app.post('/createUser', async (req, res)=>{
    let {name, username, email, password, age} = req.body;
    let user = await userModel.findOne({email});
    if(user){
        return res.send('This email is already taken');
    }else{
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                let user = await userModel.create({
                    name,
                    username, 
                    email,
                    password: hash,
                    age,
                });
                console.log(user);

                let key = jwt.sign({id: user._id, email}, 'secret');
                res.cookie('key', key);

                res.redirect('/profile');
            });
        });
        
    }
})

app.get('/login', (req, res)=>{
    res.render('login');
})

app.post('/login', async (req, res)=>{
    let {email, password} = req.body;
    let user = await userModel.findOne({email});
    if(!user){
        return res.send('Username or password is invalid');
    }
    bcrypt.compare(password, user.password, function(err, result) {
        if(!result){
            return res.send('Username or password is invalid');
        }

        let key = jwt.sign({id: user._id, email}, 'secret');
        res.cookie('key', key);

        res.redirect('/profile');
    });
})

app.get('/logout', (req, res)=>{
    res.cookie('key', "");
    res.redirect('/login');
})

app.get('/profile', isLoggedIn, async (req, res)=>{
    const user = await userModel.findOne({_id: req.user.id}).populate('posts');
    // console.log(user);
    
    res.render('profile', {user});
})

app.post('/newPost', isLoggedIn, async (req, res)=>{
    let post = await postModel.create({
        content: req.body.content,
        user: req.user.id
    });
    
    let user = await userModel.findOne({_id: req.user.id});
    user.posts.push(post._id);
    await user.save();

    // console.log(post);
    // console.log(user);
    res.redirect('/profile');    
})

app.get('/like/:id', isLoggedIn, async (req, res)=>{
    let post = await postModel.findOne({_id: req.params.id});

    if(post.likes.indexOf(req.user.id) == -1){
        post.likes.push(req.user.id);
    }else{
        post.likes.splice((post.likes.indexOf(req.user.id)), 1)
    }

    await post.save();
    res.redirect('/profile');
})

app.get('/edit/:id', isLoggedIn, async (req, res)=>{
    let post = await postModel.findOne({_id: req.params.id});
    res.render('edit', {post});
})

app.post('/update/:id', isLoggedIn, async (req, res)=>{
    await postModel.findOneAndUpdate({_id: req.params.id}, {content: req.body.content});
    res.redirect('/profile');
})

app.get('/profilePic', isLoggedIn, (req, res)=>{
    res.render('profilePic');
})

app.post('/uploadImage', isLoggedIn, upload.single('image'), async (req, res)=>{
    console.log(req.file);

    await userModel.findOneAndUpdate({_id: req.user.id}, {profilePic: req.file.filename});
    res.redirect('/profile');
})

function isLoggedIn(req, res, next){
    if(req.cookies.key === ""){
        return res.redirect('/login');
    }else{
        let data = jwt.verify(req.cookies.key, 'secret');
        // console.log(data);
        req.user = data;
        next();
    }
}

app.listen(3001, ()=>{
    console.log('Al Madad ya Qaim a.s');
});