const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String,
    fullname: String
})

var User = mongoose.model('users', userSchema);

module.exports = User;
