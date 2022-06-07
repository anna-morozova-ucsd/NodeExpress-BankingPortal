const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

//configure views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//4. point express to public directory
app.use(express.static(path.join(__dirname, '/public/')));


//read the file, convert JSON to js object
const accountData = fs.readFileSync('./src/json/accounts.json', 'UTF8')
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync('./src/json/users.json', 'UTF8')
const users = JSON.parse(userData)






  app.get('/', (req, res) => {
    res.render('index', { title: 'Account Summary', accounts: accounts});
  });

  app.get('/savings', (req, res) => {
    res.render('account', {account: accounts.savings});
  });

  app.get('/checking', (req, res) => {
    res.render('account', {account: accounts.checking});
  });

  app.get('/credit', (req, res) => {
    res.render('account', {account: accounts.credit});
  });
  app.get('/profile', (req, res) => {
    res.render('profile', {user: users[0]});
  });

//create server
const port = 3000
app.listen(port, () => {
    console.log('PS Project Running on port 3000!');
  });
