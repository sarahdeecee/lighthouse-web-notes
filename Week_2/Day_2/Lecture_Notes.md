## 11/2 W2D2 Asynchronous Control Flow
### Agenda
* Review (functions, callbacks)
* Asynchronous control flow
* BREAK
* Async file read
* Async letter printer

### Review
```javascript
const a = 'foo'; // <-- value
//    ^variable name

const fun = function(a, b, c, d, e) {
  console.log("foo!");
  console.log(a, b, c, d);
  return 3;
}

fun(); // <-- call the function
fun(1, 2, 'three', a);  // <--can call with parameters
```
## Callbacks
```javascript
const highOrder = function(name, cb) { //cb is a callback function
        //points to address where ^ function is
  console.log("Name is :", name);
  console.log('cb is ', cb);
}

highOrder('Vas', fun);
```
```javascript
const arr = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) { newArr.push(arr[i]); }
}
for (let val of arr) { } //let index in array
arr.forEach(val, index, array) { //loop is done for you. forEach can be for arrays or objects
  // BUT cannot break out, has to finish looping
}
const filteredArr = arr.filter((element) => {
  //if (element % 2 === 0) { return true; } else { return false; }
  return element % 2;
})
const multipleThree = arr.map((element) => {
  return element * 3;
})
```
## Async functions
```javascript
console.log("Async functions are fun!"); //1
console.log("Confusing"); //2
console.log("Weird"); //3
```
```javascript
setTimeout(function() {
  console.log("START!!"); //4
}, 1000)
console.log("Async functions are fun!"); //1
console.log("Confusing"); //2
console.log("Weird"); //3
```
### Everything that takes time is pushed into the background
```javascript
setTimeout(function() {
  console.log("START!!"); //4
}, 0) // even if -ve, still 4th
console.log("Async functions are fun!"); //1
console.log("Confusing"); //2
console.log("Weird"); //3
```
### Let's print a string letter by letter
```javascript
const string = 'Hello World of Async!!!\n';
let delay = 300;
for (const letter of string) { //can also use string.split('').forEach(....)
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
  delay += 300;
}
```
Using the 'request' library found on NPM, make a call to the 'http://example.edu/' and print out its website contents.

What is Error?, Response?, Body?

```javascript
// pingWebsite.js
// node pingWebsite.js -> if not installed, error
const request = require('request'); 
let content = '';
request('http://example.edu/', function(err, res, body) {
  // let's see what each is
  console.log('err ---->', err); 
  console.log('res ====>', res);
  console.log('body ****', body);
  content = body;
})

console.log("GOT CONTENT!"); // this will run first (main program)
console.log(content); // runs when the result comes back (side program)
```
### fileReader.js
There are 3 files in this directory (data1.txt, data2.txt, data3.txt).
Each file contains one number in it.
Your task is to read every single file and provide a sum of all the numbers
Example:<br />
* data1.txt == 10, data.2.txt == 14, data3.txt
* output: 124

I gotta read 1 file, finish reading it, then read the other file, then read the next file, then sum it all together.

How to read a file? (Let's Google it)
* fs.readFile()
  * fs is built into NodeJS. No need to npm install it!
```javascript
const fs = require('fs');
const readThreeFiles = cb => {
  fs.readFile('./data1.txt', 'utf8', (err, data1) => {
    // console.log(err); // let's see what's here
    // console.log(data);
    // how do I read a file next, and control the asyncs 
    // so that I have everything in the end...
    // nest to do in order!
    fs.readFile('./data2.txt', 'utf8', (err, data2) => { 
      fs.readFile('./data3.txt', 'utf8', (err, data3) => { 
        console.log('Output: ' + Number(data1) + Number(data2) + Number(data3));
        cb( Number(data1) + Number(data2) + Number(data3))
      }); 
    });
  })
}

console.log("TEST");
readThreeFiles((sum) => {

})

```