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
app.use(cookieParser());
app.use(express.static(path.join(_dirname, "public")));

app.get('/', (req, res) => {
  res.render('index');
});

const authenticateUser = (userDB, email, password) => {
  
}

app.post("/login", (req, res) => {
  //Extract email & password from the body of request
  const { email, password } = req.body;
  // Compare the extrated valuse against my database-ish
  const currentUser = userDatabaseIsh[email]

  //If it doesn't match, redirect to /
  if (!currentUser) {
    console.log("NO EMAIL");
    return res.redirect('/');
  }

  //If it doesn't match, redirect to /
  if (currentUser.password !== password) {
    console.log("BAD PASSWORD");
    return res.redirect('/');
  }
  
  //If it matches, redirect to /vault & cookie
  res.cookie("email", email);
  return res.redirect("/vault");
})