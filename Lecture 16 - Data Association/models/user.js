const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/data');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: Array, 
})

modules.export = mongoose.model('user', userSchema);