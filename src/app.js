const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

//3.configure views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//4. point express to public directory
app.use(express.static(path.join(__dirname, '/public/')));

//7.get route
app.get('/', (req, res) => {
    res.render('index', { title: 'Index'});
  });

//8. create server
const port = 3000
app.listen(port, () => {
    console.log('PS Project Running on port 3000!');
  });
