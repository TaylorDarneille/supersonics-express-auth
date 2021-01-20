require('dotenv').config() // configure environment variables
const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('you\'ve reached the home route')
})

app.get('/profile', (req, res)=>{
    res.send('you\'ve reached the profile route')
})

app.listen(process.env.PORT, ()=>{
    console.log(`auth app running on port ${process.env.PORT}`)
})