11/8 W3D1: Web Servers 101
## Agenda
- Web servers (theory)
- NodeJS servers
- ExpressJS
- Get requests
- Request <---> Response
- ExpressJSSending information from server to EJS

# Web Servers
# Networking with TCP
- Computer A wants to connect to Computer B
- Computer A finds the credentials to computer B
- Computer B has a server listening...
- Computer A connects to Computer B
- Computer B can get messages and act upon them
- Computer A can disconnect from Computer B

## HTTP
- server always gives a response to the request
- can only receive one response for one request

Server (Listens)           Client
    <------------------------REQ
    RES------------------------>
            Disconnected!
### Vanilla server
```javascript
// demo-nodeJS
const http = require('http');

const server = http.createServer((request, response) => {
  console.log("Request", request.url);
  if (request.url === '/eth') {
    response.end("Buy ETH");
  } else if (request.url === '/dogs') {
    response.end("Buy Woof!");
  } else if (request.url === '/money') {
    response.end("Here's $20!");
  } else {
    response.end("Hello world!");
  }
})

server.listen(8080, () => {
  console.log(`Server is on and listening on part 8080`);
})
```
```javascript
// server.js
// Step 0: Since we are using an NPM library/framework
// we want to npm initialize...
// 1: Make a file called index/server.js
// 2: follow the docs!
const express = require('express');
const app = express(); // createServer equivalent

app.get('/', (request, response) => {
  console.log('/ has been hit!');
  response.send("Welcone to homepage!");
})

// ***It's always REQ first, RES second
app.get('/eth', (req, res) => {
  console.log('/eth has been hit!');
  response.send("<body><h2>BUY</h2><h3>ETH!!</h3><span><i>:)</i></span></body>");
})

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
})

// status codes http meme
```
### Installing EJS
1. npm install ejs
2. Set 'view engine' to ejs
3. You are **required** to make a `'views/'` folder

* See 'emmet abbreviations'
```javascript
const express = require('express');
const app = express(); // createServer equivalent

app.get('/', (request, response) => {
  console.log('/ has been hit!');
  // response.send("Welcone to homepage!");
  response.render('homepage');
})

// ***It's always REQ first, RES second
app.get('/eth', (req, res) => {
  console.log('/eth has been hit!');
  // res.send command gets changed when using EJS
  // to the command called: "res.render('filename')"
  res.render('eth') // .ejs filename not required
})

// How do you list a bunch of items on a page?
const cats = ['Puma', 'Rosy', 'Mr Buttons', 'Bob', 'Hannah'];
app.get('/cats', (req, res) => {
  console.log('/cats has been hit!');
  // res.render() takes TWO parameters!!
  // 1 - filename sentout to the client as requested
  // 2 - OBJECT {} is SHARED/PASSED between server.js and filename.ejs
  const obj = { key: 'value', key2: 'value2' };
  res.render('cats', obj);
  // in html file <%= key %> can access the value
  // <%= locals.key =>
  // <%= key1 =>
  // <%= JSON.stringify(locals) %>
})

app.get('/cats/:catid', (req,res) =>{
  console.log(req.params);
  // req.params.id is a number
  // I will find the value responsible for the id/index of my array
  // and send it to view using our obj
  const obj = { cat: cats[req.params.cat_id]}
  res.render('cats_show', obj);
})

// If I have a route that is able to display more info about that item
// how do I reuse the logic for all the other items?

app.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
})