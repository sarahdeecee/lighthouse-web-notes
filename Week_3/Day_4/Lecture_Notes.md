### userData.js
```javascript

const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  email: "periodic@tabl.com",
  password: "hydrogen"
  secret: "Actually prefers biology over chemistry"
}
const user2 = {
  name: "Leon Semionovitch Tolstoi",
  email: "war@peace.com",
  password: "potato",
  secret: "absolutely loves Danielle Steele novels"
}

const userDatabaseIsh = {
  "periodic@table.com": user1,
  "war@peace.com": user2
}
module.exports = userDatabaseIsh;
```
```javascript
const userDatabaseIsh = require('/data/userData.js');
const authenticateUser = require('/helpers/userHelpers.js');
const fetchUserInformation = require('helpers/userHelpers/js');
const cookieCheck = require('middlewareHelpers');
app.use(cookieParser());
app.use(express.static(path.join(_dirname, "public")));
//app.use same as app.get but for all methods
app.use(cookieCheck)


app.get('/', (req, res) => {
  res.render('index');
});

app.post("/login", (req, res) => {
  //Extract email & password from the body of request
  //const email = req.body.email; const password = req.body.password;
  const { email, password } = req.body;
  // Compare the extrated valuse against my database-ish
  const { data, error } = authenticateUser(userDatabaseIsh, email, password)

  if(error) {
    console.log(error);
    return res.redirect('/');
  }

  res.cookie("email", email);
  return res.redirect('/vault/');
  })



  app.get('/vault', (req, res) => {
    //check for cookie
    

    //Give values to templateVars 
    const templateVars = {
      name: currentUser.name,
      secret: currentUser.secret
    };
    //Render the vault template with the templateVars
    return res.render('vault', templateVars);
  })

  app.get('/dashboard', (req, res) => {
    //check for existence of a cookie
  })

  module.exports = app;

  ```
  ### userHelpers.js
  ```javascript
const authenticateUser = (userDB, email, password) => {
  const currentUser = userDatabaseIsh[email]

  //If it doesn't match, redirect to /
  if (!currentUser) {
    return { data: currentUser, error: "Not a valid email" };
  }

  //If it doesn't match, redirect to /
  if (currentUser.password !== password) {
    console.log("BAD PASSWORD");
    return { data: currentUser, error: "Not a valid password" };
  }
  
  //If it matches, redirect to /vault & cookie
  return { data: currentUser, error: null };
}

const fetchUserInformation = (userDB, email) => {
  //fetch user information based on the value of the cookie
  const currentUser = userDB[email];
  
  if (!currentUser) {
    return { data: null, error: "Invalid email in cookie" };
  }
  return { data: currentUser, error: null };
};

module.exports = { authenticateUser, fetchUserInformation };
```
middlewareHelpers.js
```javascript
const cookieCheck = (req, res, next) => {
  const { email } = req.cookies;
  const safeList = ['/', '/login'];
  //fetch user info based on value of the cookie
  const { data, error } = fetchUserInformation(userDatabaseIsh, email);

  if(error && !safeList.includes(req.path)) {
    console.log(error);
    return res.redirect('/');
  }

  return next(); //
}
module.exports = cookieCheck;
```