const express = require("express")
const cookieParser = require('cookie-parser')
const dotenv = require ('dotenv')
const jwt = require ('jsonwebtoken')

const app = express()
dotenv.config()

const port = process.env.port || 3001

//STATIC FOLDER
app.use(express.static('public'))

app.use('/', require('./routers/authRouter'));

app.use(cookieParser())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//CONFIGURE TEMPLATE ENGINEERING
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/login', (req, res) => {
//create a token using form data
const token = jwt.sign(req.body, process.env.JWT_SECRET)

//set the cookie with the token
app.get('/set', (req, res) => {
    res.cookie('Cookies!', {})
})
res.cookie('token', token)

//send a response to browser
res.send('Logged In!')

})

app.get('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.redirect('/')
});

//PORT LISTENING
app.listen(port, () => {
    console.log(`Front server listening to port ${port}`)
})