//const fs = require('fs')
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
const session = require('express-session')

const user = require('./model/user')
const becrypt = require('bcrypt')

const middlewareAuth = require('./middleware/middlewareAuth')

app.use(
  session({ secret: 'hgfjcghuu88jj;oilu9bggfy', cookie: { maxAge: 60000 } }),
)
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/assets', express.static(__dirname + '/assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/homepage.html'))
})
app.get('/suit', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/suit.html'))
})

app.get('/login', middlewareAuth.isGuest, (req, res) => {
  res.sendFile(path.join(__dirname + '/views/loginpage.html'))
})

app.post('/login', middlewareAuth.isGuest, (req, res) => {
  try {
    const { email, password } = req.body
    const userAcc = user.findOne({ email: email })
    const validPassword = becrypt.compare(password, userAcc.password)
    if (validPassword) {
      req.session.user = userAcc
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  } catch (error) {
    res.redirect('/login')
  }
})

app.get('/register', middlewareAuth.isGuest, (req, res) => {
  res.sendFile(path.join(__dirname + '/views/registerpage.html'))
})

app.post('/register', middlewareAuth.isGuest, (req, res) => {
  try {
    const { email, password } = req.body
    const salt = becrypt.genSalt(10)
    const hashPassword = becrypt.hash(password, salt)
    user.create({ email: email, password: hashPassword })
    res.redirect('/login')
  } catch (error) {
    res.redirect('/register')
  }
})

app.get('/logout', middlewareAuth.isAuthenticated, (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

app.listen(5000, () => {
  console.log('Aplicatioon is running in localhost:5000')
})
