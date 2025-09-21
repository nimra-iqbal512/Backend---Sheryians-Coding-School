const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongoProject`);

let userSchema = mongoose.Schema({
    name: String,
    profilePic: {
        type: String,
        default: 'default.jpeg',
    },
    username: String,
    email: String,
    password: String,
    age: Number,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
});

module.exports = mongoose.model('user', userSchema);