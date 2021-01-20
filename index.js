require('dotenv').config() // configure environment variables
const express = require('express')
const app = express()

// set the view enging to ejs
app.set('view engine', 'ejs')
// tell the app to use ejs layouts
app.use(require('express-ejs-layouts'))

// controller middleware
app.use('/auth', require('./controllers/auth.js'))

app.get('/', (req, res)=>{
    res.send('you\'ve reached the home route')
})

app.get('/profile', (req, res)=>{
    res.send('you\'ve reached the profile route')
})

app.listen(process.env.PORT, ()=>{
    console.log(`auth app running on port ${process.env.PORT}`)
})