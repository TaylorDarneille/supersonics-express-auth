const express = require('express')
const router = express.Router()

router.get('/signup', (req, res)=>{
    res.send('you\'ve hit the signup route')
})

router.post('/signup', (req, res)=>{
    console.log('post signup route hit')
})

router.get('/login', (req, res)=>{
    res.send('you\'ve hit the login route')
})

router.post('/login', (req, res)=>{
    console.log('post login route hit')
})

router.get('/logout', (req, res)=>{
    res.send('you have been logged out')
})

module.exports = router