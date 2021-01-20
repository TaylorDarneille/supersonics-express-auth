require('dotenv').config() // configure environment variables
const express = require('express')
const app = express()

// set the view enging to ejs
app.set('view engine', 'ejs')
// tell the app to use ejs layouts
app.use(require('express-ejs-layouts'))

//body parser middleware allows us to receive form data in req.body
app.use(express.urlencoded({extended: false}))

// controller middleware
app.use('/auth', require('./controllers/auth.js'))

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/profile', (req, res)=>{
    res.render('profile')
})

app.listen(process.env.PORT, ()=>{
    console.log(`auth app running on port ${process.env.PORT}`)
})