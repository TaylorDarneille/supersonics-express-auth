const express = require('express')
const router = express.Router()

router.get('/signup', (req, res)=>{
    res.render('auth/signup.ejs')
})

router.post('/signup', (req, res)=>{
    res.send(req.body)
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