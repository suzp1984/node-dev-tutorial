'use strict';

var mongoose = require('mongoose');

var db = function() {
    return {
        config: function(conf) {
            mongoose.connect('http://localhost/tekbooks');
            var db = mongoose.connection;
            db.on('error');
        }
    };
}
