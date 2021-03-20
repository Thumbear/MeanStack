const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullname = req.body.fullname;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.nohp = req.body.nohp;
    user.alamat = req.body.alamat;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000) {
                res.status(422).send(['duplicate email']);
            }
        }
    })
}