const express = require('express');
const app = express();

// We have imported the model. Now we can do CRUD using this model.
const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send('Hello');
});

app.get('/create', async(req, res)=>{
    let created_user = await userModel.create({
        name: "xyzzz",
        email: "nimra@gmail.com",
        username: 'nimra iqbal'
    })
    res.send(created_user);
});

app.get('/update', async (req, res)=>{
    // // Update a Single user
    // let updated_user = await userModel.findOneAndUpdate({name: 'xyzzz'}, {name: 'new xyzzz'}, {new: true});
    // res.send(updated_user);

    // Update Multiple users
    await userModel.updateMany({username: "nimra iqbal"}, {name: "nimra"});
    // Here in updateMany(), {new: true} will not return the updated document.
    let updated_users = await userModel.find({username: "nimra iqbal"});
    res.send(updated_users)
})

app.get('/read', async (req, res)=>{
    // // For all users
    // let users = await userModel.find();
    // res.send(users);

    // // For particular/multiple users
    // // let users = await userModel.find({username: "nimra iqbal"});
    // let users = await userModel.find({name: "xyzzz"});
    // res.send(users);

    // For particular/single user
    let users = await userModel.findOne({username: "nimra iqbal"});
    res.send(users);
})


app.listen(3000, ()=>{
    console.log('Al Ajal Ya Imam a.s');
});