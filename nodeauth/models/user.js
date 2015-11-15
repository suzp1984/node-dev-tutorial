var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String, required:true, bcrypt:true
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    profileimage: {
        type: String
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.hash(newUser.password, 10, function(err, hash) {
        if (err) throw err;
        // Set hashed password
        newUser.password = hash;
        newUser.save(callback);        
    });
};

module.exports.getUserByUsername = function(username, callback) {
    var query = {username: username};

    User.findOne(query, callback);
};

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.comparePassword = function(condidatePassword, hash, callback) {
    console.log("compare password: " + condidatePassword + " .vs. " + hash);
    bcrypt.compare(condidatePassword, hash, function(err, isMatch) {
        //if (err) return callback(err);
        if (err) throw err;
        callback(null, isMatch);
    });
};
