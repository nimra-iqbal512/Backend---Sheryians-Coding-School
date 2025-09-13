const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('./models/user');
const postModel = require('./models/post'); //require krny sy mongodb mai model create ho jata hai 

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/register', async (req, res) => {
    let { email, password, username, name, age } = req.body;

    // Check either user exists or not
    let user = await userModel.findOne({ email: req.body.email });
    if (user) return res.status(500).send("User already registered");

    // Create user if it does not exist
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password: hash
            });

            let token = jwt.sign({ email: email, userid: user._id }, 'secret');
            res.cookie("token", token);
            res.send("Registered");
        })
    })
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', async (req, res) => {
    let { email, password } = req.body;

    // Check either user exists or not
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(500).send("Something went wrong");

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: email, userid: user._id }, 'secret');
            res.cookie("token", token);
            res.status(200).redirect("/profile");
        }
        else res.redirect('/login');

    })
});

app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect('/login');
})

app.get('/profile', isLoggedIn, async (req, res) => {
    // // Find details of logged in user
    // console.log(req.user);

    // let user = await userModel.findOne({email: req.user.email});
    // await user.populate('posts'); //populate() replaces the ids of posts with actual post documents

    // Above 2 linescan be combined as
    let user = await userModel.findOne({email: req.user.email}).populate("posts");
    console.log(user);
    res.render('profile', {user});
})

app.get('/like/:id', isLoggedIn, async (req, res) => {
    console.log('Here');

    let post = await postModel.findOne({_id: req.params.id}).populate("user");
    //Like and Unlike post - If logged in user not found in likes array, add user's like, else remove the logged in user like
    if(post.user.indexOf(req.user.userid) === -1){
        post.likes.push(req.user.userid);
    }else{
        post.likes.splice(post.likes.indexOf(req.user.userid), 1);
    }
    
    await post.save();
    res.redirect('/profile');
})

app.post('/post', isLoggedIn, async (req, res)=>{
    let user = await userModel.findOne({email: req.user.email});
    let post = await postModel.create({
        user: user._id,
        content: req.body.content,
    });

    user.posts.push(post._id);
    await user.save();
    res.redirect('/profile');
});

// Middleware for protected routes
// We will check either user is logged in(token value set), or not
// Agr yeh middleware hm kisi route (i.e. '/profile') py lgaty hain, jb tk user log in nahi ho ga, route ka callback function nahi chaly ga - Protected Routes
function isLoggedIn(req, res, next) {
    if (req.cookies.token === "") res.redirect("/login");
    else {
        let data = jwt.verify(req.cookies.token, 'secret');
        // console.log(data);
        req.user = data;    //This data will be send inside the req of the route, where middleware is used
        next();
    }
}

app.listen(3000, () => {
    console.log('Ya Ali a.s');
});