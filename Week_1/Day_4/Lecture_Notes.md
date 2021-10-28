# 10/28 W1D4 Callbacks
## What are *callbacks*?
They are functions passed into another function as a parameter.

### All programming systems:
Input ⇨ | Process ⇨ | Output
--- | --- | ---
arguments (can also pull from global) | what's inside {...} | return statement (undefinited if no return statement)

* side-effect:

### Agenda
* Functions as values
* Function calling vs function passing vs function definitions
* Callbacks and higher order functions
* Anonymous functions
* Arrow functions
* Make our own higher order function
  * has a function as an input

Function definition:
```javascript
function sayHello(name) {
  const output = `hello there ${name}`;
  console.log('output: ',output);
  return output;
}
```

```javascript
let age = 50; // declaration & initialization (giving it a value)

const sayHello = function(string) { //function definition
  const output = `hello ${string}`; //initialization
  console.log('output: ',output);
  return output;
};

sayHello('to my little friend.'); // calling the function (assigned to a variable)
// ^( ... ) uniary operator

const myOtherVar = sayHello; // passed the function from one var to another
console.log('myOtherVar',myOtherVar('monkey fuzz!'));
```

```javascript
//output num + 2 (outputs twice - return value and console.log <-side effect)
const addTwo = function(num) { //num parameter
  console.log('sum:', num + 2); // output 1 (side effect)
  return num + 2; // output
};

const myFuncs = [ addTwo, sayHello ] //array of functions
```