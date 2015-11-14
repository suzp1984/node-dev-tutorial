var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'suzp1984@gmail.com',
            pass: 'something'
        }
    });

    var mainOptions = {
        from: 'suzp1984@163.com',
        to: 'suzp1984@gmail.com',
        subject: 'subject',
        text: 'xxxxxx'
    };
});

module.exports = router;
