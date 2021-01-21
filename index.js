require('dotenv').config() // configure environment variables
const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')

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

// flash middleware
app.use(flash())

// CUSTOM MIDDLEWARE
app.use((req, res, next)=>{
    // before every route, attach teh flash messages and current user to res.locals
    res.locals.alerts = req.flash()
    res.locals.currentUser = req.user
    next() // move on to the next piece of middleware
})

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