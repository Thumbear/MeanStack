const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require: "Full name can\'t be empty "
    },
    usename: {
        type: String,
        require: "username can\'t be empty "
    },
    email: {
        type: String,
        required: "email can\'t be empty ",
        unique: true
    },
    password: {
        type: String,
        required: "password can\'t be empty ",
        minlenght: [5, "Password atleast 5 character long"]
    },
    nohp: {
        type: String,
        required: "no HP can\'t be empty "
    },
    alamat: {
        type: String,
        required: "Full name can\'t be empty "
    }
});

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail');
mongoose.model('User', userSchema);