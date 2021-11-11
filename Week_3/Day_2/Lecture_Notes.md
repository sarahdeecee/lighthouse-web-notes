## Recap: Web 3_Tier Architecture
Web Browser (Client) | Web Server | Database
--- | --- | ---
Primary function is to render HTML | Accepts http requests from clients and sends back the resource | Keeps the data pesistent. Allows CRUD operations with SQL

### Recap: ExpressJS
Express JS does provide us with some tools
1. Routing system
2. Templating engine (ejs)
3. Middleware functions

## CRUD With Express
Let's create a js jokes app with ExpressJS

### Functionalities
Create a new joke | Create
List the jokes | Read
Update a joke | Update
Delete a joke | Delete

http verbs are mapped to CRUD operations
POST - Create
GET - Read
PUT - Update
DELETE - Delete

### Route
We're creating the routes according to REST*
*Since some browsers do support only GET and POST, we will use a slight variation on some routes.

```javascript
// END POINTS OR ROUTE

app.get('/' (req, res) => {
  res.send('Welcome to the top list of Javascript jokes!');
})
// CRUD Operations on jokes

// Display all the jokes in our db
// READ
app.get('/jokes', (req, res) => {
  const templateVars = {quotesList: jsJokesDb};

  res.render('jokes_list', templateVars); 
}

// Create a new joke
// READ => display the new form
app.get('/jokes/new', (req, res) => {
  res.render('new_joke')
});

// CREATE => add the joke into our db
app.post('/jokes', (req, res) => {
  // extract the info that was submitted by the form
  const question = req.body.question;
  const answer = req.body.answer;

  //add it to the db (jsJokesDb)
  jsJokesDb[newKey] = {
    id: newKey,
    question: question,
    answer: answer
  }
  res.send("Submitted!");
})

// Update an existing joke
app.post('/jokes/:id', (req, res) => {
  //extract the id
  const jokeId = req.params.id;

  //extract the question and answer
  const question = req.body.question;
  const answer = req.body.answer;

  //update the db
  jsJokesDb[jokeId].question = question;
  jsJokesDb[jokeId].answer = answer;

  //redirect
  res.redirect('/jokes/'); // to display the jokes with the updated value
})
// READ => display the updated form
// UPDATE => update the info in the db
app.get('/jokes/:id', (req, res)) => { //:id is dynamic (variable)
  const jokeId = req.params.id;
  const templateVars = { question: jsJokesDb[jokeId].question, answer: jsJokesDb[jokeId].answer };
  res.render('joke_show', templateVars);

// Delete a joke
app.post('/jokes/:id/delete', (req, res) => {
  //extract the id
  const jokeId = req.params.id;
  //delete this joke from db
  // DELETE operation
  delete jsJokesDb[jokeId];

  // READ => display the updated form
  res.redirect('/jokes');
})
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
```
```html
<%- include('.partials/_head') %>
  <h1>Jokes List</h1>
  
  <% for (let jokeID in quotesList) {%> <!--check your render-->
    <ul>
      <li>Question > <%= quotesList[jokeId].question %></li>
      <li>Answer > <%= quotesList[jokeId].answer %></li>
      <li>
        <form method="GET" action="/jokes"<%= quotesList[jokeId].id %> ">
          <input type="submit" value="Edit">
        </form>
        <!--delete not accepted by browserm so add /delete-->
        <form action="POST" action="/jokes/<%= quotesList[jokeId].id %>/delete>
```
```html
<form method="POST" action="/jokes/<% %>
```
res.render() -> render an EJS
res.send() -> send a response (NodeJS)