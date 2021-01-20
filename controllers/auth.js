const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/signup', (req, res)=>{
    res.render('auth/signup.ejs')
})

router.post('/signup', (req, res)=>{
    // find or create a new user!
    db.user.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            name: req.body.name,
            password: req.body.password
        }
    })
    .then(([user, wasCreated])=>{
        if(wasCreated){
            res.send(`Created a new user profile for ${user.email}`)
        } else {
            res.send('Email already exists! try loggin in?')
        }
    })
})

router.get('/login', (req, res)=>{
    res.render('auth/login.ejs')
})

router.post('/login', (req, res)=>{
    res.send(req.body)
})

router.get('/logout', (req, res)=>{
    res.send('you have been logged out')
})

module.exports = router