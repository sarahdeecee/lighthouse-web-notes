## Agenda
Building a server with login (maybe register)
- the wrong way
- the right-ish way... cookies
- BONUS - the perfect way (just theory!)
- what you have to do for today's activities

Create a server
- npm init -y
- npm i express
- touch .gitignore
  - node_modules/
Then...
- npm i nodemon
- npm i ejs

server.js
```javascript
//require express
const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
// app = express();
const app = express;
//Making a login/registration page
//Using cookies
app.use(bodyParser.urlencoded({extended:false}));

const users = {
  1: {id: 1, email: 'obiwan@gmail.com', password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com', password: 'andMyAxe'},
  3: {id: 3, email: 'a@gmail.com', password: 'test'},
};

// 1 Make a login page
// 2 Create / authenticate account
// 3 Redirect

// I have a username
const findUserByEmail = email => {
  for (let key in users) {
    console.log('key --->', key);
    console.log('obj --->', users[key]);
    if (users[key].email === email) {
      return users[key];
    }
  }
  return null;
}
// I have an object full of users
// I must loop through this object
// return my back a user that matches email

app.set('view engine', 'ejs');

// route <--for testing
app.get('/test', (req, res) => {
  res.send('hello world :)');
});

app.get('/', (req, res) => {
  res.render('homepage');
});

//create the form
app.get('/login', (req,res) => {
  res.render('login');
})
app.post('/login',(req,res) => {
  console.log('Somebody is trying to login!!');
  console.log(req.body);
  const foundUser = findUserByEmail(req.body.email);
  if (foundUser) {
    // res.send('Found user! :)');
    res.redirect('/');
  } else {
    res.send('User does not exist :(');
  }
  res.send('thank you!');
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```

login.ejs
- get - get information
- post - save information (change/alter/create something on the server)
- action - where do I wanna go?
```html
<body>
  <form method="POST" action="/login">
    <h2>Login Form</h2>
    <p>email: <input type="email" name="email"></p>
    <p>password: <input type="password" name="password"></p>
    <p><button>Log me in!!</button></p>
