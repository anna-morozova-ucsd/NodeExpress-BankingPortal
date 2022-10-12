const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
//require data.js and use object destructuring to create 3 constants
//accounts, users, writeJSON
const { accounts, users, writeJSON } = require('./data');
const accountRoutes = require('./routes/accounts.js')
const servicesRoutes = require('./routes/services.js')

//configure views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//point express to public directory
app.use(express.static(path.join(__dirname, '/public/')));
//1.express middleware to handle POST data
app.use(express.urlencoded({ extended: true }))

//read the file, convert JSON to js object. remove 
// const accountData = fs.readFileSync('./src/json/accounts.json', 'UTF8')
// const accounts = JSON.parse(accountData)

// const userData = fs.readFileSync('./src/json/users.json', 'UTF8')
// const users = JSON.parse(userData)
app.use('/account', accountRoutes)





app.get('/', (req, res) => {
  res.render('index', { title: 'Account Summary', accounts: accounts });
});

// app.get('/savings', (req, res) => {
//   res.render('account', { account: accounts.savings });
// });

// app.get('/checking', (req, res) => {
//   res.render('account', { account: accounts.checking });
// });

// app.get('/credit', (req, res) => {
//   res.render('account', { account: accounts.credit });
// });
app.get('/profile', (req, res) => {
  res.render('profile', { user: users[0] });
});
app.use('/services', servicesRoutes)
// app.get('/payment', (req, res) => {
//   res.render('payment', { account: accounts.credit });
// });
// get route points to '/transfer' url path; 
// it renders 'transfer' view
// app.get('/transfer', (req, res) => {
//   res.render('transfer');
// });
// //new balance of the account we are transferring from
// // post route that points to '/transfer' url path
// app.post('/transfer', (req, res) => {
//   accounts[req.body.from].balance -= req.body.amount
//   accounts[req.body.to].balance += parseInt(req.body.amount, 10)
//   writeJSON()
//   res.render('transfer', { message: "Transfer Completed" })
// });

// app.post('/payment', (req, res) => {
//   accounts.credit.balance -= req.body.amount
//   accounts.credit.available += parseInt(req.body.amount, 10)
//   writeJSON()
//   res.render('payment', { message: "Payment Successful", account: accounts.credit })
// })

//create server
const port = 3000
app.listen(port, () => {
  console.log('PS Project Running on port 3000!');
});
