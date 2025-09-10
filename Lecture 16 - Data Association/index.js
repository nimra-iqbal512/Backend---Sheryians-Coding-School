const express = require('express');
const app = express();

const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username: "Nimra",
        age: 25,
        email: "nimra@gmail.com"
    });
    res.send(user);
});

app.get("/post/create", async (req, res)=>{
    // yha hum post kop btae gy, k user kn hai
    let post = await postModel.create({
        postdata: "Hello World",
        user: "68c0f29d9d7e2ad54eb1025d",   //abi hum hard code kr rhy hain, but Logged In user ki id yaha ae gi
    });
    
    // user ko b pta ho k us ny kon c post create ki hai
    let user = await userModel.findOne({_id: '68c0f29d9d7e2ad54eb1025d'});
    user.posts.push(post._id);
    await user.save();  //If we made changes without findOneAndUpdate(), then we have to use user.save() to save the changes

    res.send({post, user});
});

app.listen(3000, ()=>{
    console.log('Ya Ali a.s');
});