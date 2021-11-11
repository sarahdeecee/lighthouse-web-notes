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
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bcrypt = require("bcryptjs");
const logger = require("morgan");
const salt = bcrypt.genSaltSync(10);
const userDatabaseIsh = require("./data/userData");
const {
	authenticateUser,
	fetchUserInformation,
} = require("./helpers/userHelpers");
const middlewareHelperGenerator = require("./helpers/middlewareHelpers");
const { cookieCheck } = middlewareHelperGenerator(
	userDatabaseIsh,
	fetchUserInformation
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, "public")));
app.use(
  cookieSession({ //middleware gives us access to req.session
    name: 'session',
    keys: ['I like security it\'s the best', 'key2']
  })
);
//app.use same as app.get but for all methods
app.use(cookieCheck) //cookieCheck passed as parameter

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

  // res.cookie("email", email);
  req.session.email = email;
  return res.redirect('/vault/');
});

app.post("/register", (req, res) => {
	const { email, name, password } = req.body;
	const newUser = {
		email,
		name,
		password: bcrypt.hashSync(password, salt),
	};
});

app.post("/logout", (req, res) => {
	// res.clearCookie('email')
	// req.session.email = null
	delete req.session.email;
	return res.redirect("/");
});

app.get('/vault', (req, res) => {
  //check for cookie
  const { email } =  req.session;
  const { data, error } = fetchUserInformation(userDatabaseIsh, email);
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
  const currentUser = userDB[email]

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


const middlewareHelperGenerator = (userDB, fetchUserInformation) => {
	const cookieCheck = (req, res, next) => {
		// const { email } = req.cookies;
		const { email } = req.session;
		const safeList = ["/", "/login"];
		const isSafe = safeList.includes(req.path);
		// Fetch user information based on the value of the cookie
		const { data, error } = fetchUserInformation(userDB, email);

		if (error && !isSafe) {
			console.log(error);
			return res.redirect("/");
		}

		return next();
	};

	return { cookieCheck };
};

module.exports = middlewareHelperGenerator;
```