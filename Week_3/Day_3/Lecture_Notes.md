# 11/10 W3D3 GTTP COokies & User Authentication
## Agenda
Building a server with login (maybe register)
- the wrong way
- the right-ish way... cookies
- BONUS - the perfect way (just theory!)
- what you have to do for today's activities
---
Create a server
- npm init -y
- npm i express
- touch .gitignore
  - node_modules/
Then...
- npm i nodemon
- npm i ejs

We want to
1. Make a login page
2. Create / authenticate account
3. Redirect
### server.js
```javascript
//require express
const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookieParser');
// app = express();
const app = express;
//Making a login/registration page
//Using cookies
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
// Cookies!!
//
const users = {
  1: {id: 1, email: 'obiwan@gmail.com', password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com', password: 'andMyAxe'},
  3: {id: 3, email: 'a@gmail.com', password: 'test'},
};

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
  const templateVars = {user: null};
  //give me all urls with the id
  console.log(req.cookies);
  if (req.cookies.user_id) {
    templateVars.user = users[req.cookies.user_id];
  }
  res.render('homepage', templateVars);
});

//create the form
app.get('/login', (req,res) => {
  res.render('login');
})
// app get register (for the form)
// app post register (for getting info from the user)

app.post('/login',(req,res) => {//req.url = current URL
  console.log('Somebody is trying to login!!');
  console.log(req.body);
  //foundUser <--returns a user object {id, email, pass} if found OR null if not
  const foundUser = findUserByEmail(req.body.email);
  if (foundUser) {
    //to check their pass...
    // if mass matches the input (req.body.password)
    //set a cookie
    //if not, tell them to go away!
    console.log('Found user! <--', foundUser);
    res.cookie('username', foundUser.id)
    res.redirect('/');
  } else {
    res.send('User does not exist :(');
  }
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
  </form>
</body>

```
Today, users will have their own urls that they created. We will change the urlDatabase from what you have to this:
```javascript
const urlDatabase = { //from key:value pair to key:object
  'randoStr1': {longURL: 'www.google.ca', shortURL: 'randoStr1'. user_id: 1},
  'randoStr2': {longURL: 'www.reddit.ca', shortURL: 'randoStr2'. user_id: 2}
}
//then need to refactor everything
```
```html
<% for (let url in urlDatabase) { %>
  <p><%= url %> <%= urlDatabase[url].longURL %>
<% } %>
```
Tips for today
- do one step at a time
- check each route