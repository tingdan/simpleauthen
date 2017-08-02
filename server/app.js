const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
var Users = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('express-flash');
const session = require('express-session');

mongoose.connect('mongodb://localhost/collectionweb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database');
})



app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extends: false}))
app.use(flash());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
},
    function(email, password, done) {

        Users.findOne({ email: email}, function(err, user) {

            if(err) { console.log('0'); return done(err);}
            if(!user) {
                console.log('1');
                return done(null, false, { message: 'Incorrect username.'});
            }
            if(user.password !== password) {
                console.log('2');
                return done(null, false, { message: 'Incorrect password.'});
            }
            console.log(user);
            return done(null, user);
        })
    }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.findById(id, function(err, user) {
    done(err, user);
  });
});

app.get('/', function(req, res) {
        res.
        console.log(req.session);
        res.render('index');


})

app.post('/signup', function(req, res) {
    console.log(req.body.email);
    Users.find({ email: req.body.email}, function(err, user) {
        if (err) throw err;
        else if(user.length !== 0) {
            console.log(user);
            res.status(400).json({ error: "email alredy in used"})

        } else {
            var newUser = new Users(req.body);
            newUser.save(function(err) {
                if(err) throw err;
                res.status(200).json({ "message": "success add user"});
            })
        }
    })

})

app.post('/login', passport.authenticate('local', { failureRedirect: '/login',
                                                    failureFlash: true}),
        (req, res) => {
            if(req.user) {
                //console.log(req.user);
                //console.log(res);
                res.json({"auth": req.user.fullname})

            } else { res.redirect('/login')}
        }
);

app.get('*', function(req, res) {
     res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(3000, function() {
    console.log('Server running on http://localhost:3000');
})
