var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//by importing passport local mongoose(plm) we no longer need to keep user id and password in the schema since its a part of PLM
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin:   {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);