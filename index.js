require('dotenv').config() // configure environment variables
const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('./config/ppConfig.js')

// set the view enging to ejs
app.set('view engine', 'ejs')
// tell the app to use ejs layouts
app.use(require('express-ejs-layouts'))

//body parser middleware allows us to receive form data in req.body
app.use(express.urlencoded({extended: false}))

// session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middlware
app.use(passport.initialize())
app.use(passport.session())

// controller middleware
app.use('/auth', require('./controllers/auth.js'))

app.get('/', (req, res)=>{
    if(req.user) {
        res.send(`req.user: ${req.user.name}`)
    } else {
        res.send('no user is currently logged in')
    }
    // res.render('home')
})

app.get('/profile', (req, res)=>{
    res.render('profile')
})

app.listen(process.env.PORT, ()=>{
    console.log(`auth app running on port ${process.env.PORT}`)
})