# 10/28 W1D4 Callbacks
## What are *callbacks*?
They are **functions** passed into another function as a **parameter**.

### All programming systems:
Input ⇨ | Process ⇨ | Output
--- | --- | ---
arguments (can also pull from global) | what's inside {...} | return statement (undefinited if no return statement)

**Side-effect:** output that alters the external state of the application (parts or values that don't directly reside inside the method)

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

sayHello('to my little friend.'); // calling the function (assigned to a variable) // function execution
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

const myFuncs = [ addTwo, sayHello ]; //array of functions

const result = myFuncs[0](5); ///myFuncs[0] = addTwo
console.log('result:', result); // sum: 7, result: 7

console.log('sayHello:', sayHello.toString()); //console.log the variable source code
```
```javascript
const thisIsAnObject = { first: 'a', second: 'b'};
const thisIsAnArray = ['all', 'manner', 544, TRUE];

thisIsAnArray.forEach(function() { console.log('blah'); }) // array is using dot function -> means it's an object
```

Callback: a function that get passed to another function to be invoked by that second function

A higher order functinon (HOF): a function that accept another function as an argument
Variables can be funcion valued
```javascript
const runMe = function(callback) { // parameter is 'callback' => HOF // callback if function valued
  callback('Elise');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`); //side-effect only, returns 'undefined'
};
const sayHello2 = function(name) {
  console.log("sayHello2 logs: ",`hola!! ${name}`); //side-effect only, returns 'undefined'
}

runMe(sayHello2); //sayHello2 is a function 
```
## Anonymous functions
Anonymous functions are functions with no names.
```javascript
function product(x,y){
  //do tuff
  return x * y;
}

function(name) { //anonymous function definition
    console.log('Hola Amiga! ', name);
}
  
runDatabaseQuery(function(name) { // function definition gets executed without a name
  console.log('Hola Amiga! ', name);
});

const runDatabaseQuery = function(action) {
  action('Elise'); // anon function given a name
}
```
## Arrow functions
### Advantages
1. No need to write the "function" word
2. If there is only a single argument, there's no need for parentheses
3. If there is only one line of code, you can omit curly braces
```javascript
const runMyFunction = function(callback) {
  callback('Monkey Fuzz!');
}
```
```javascript
runMyFunction( arg => console.log('arg1',arg1) ); //function definition with 1 parameter (the arrow function (arg => console.log('arg1',arg1))) and a side effect
// runMyFunction( (arg) => { console.log(arg1); } );

callback = arg => console.log('arg1',arg1);
runMyFunction(callback);
```
```javascript
//anonymou function
const myFunc = function(name) { console.log('Hola Amiga! ',name); }
name => console.log('Hola Amiga! ',name); 
```
4. 




---
## Higher Order Functions
```javascript
const animalNoises = ['oink','moo','meow','bark','quack'];

const forEach = (arr, action) => { //variable definition, taking 2 parameters (action is a function)
  console.log('this is our version:');
  for (const element of arr) {
    action(element); // action = function that was called as a parameter
  } // action is the variable
};

forEach(animalNoises, animalNoise => console.log(`The animal says ${animalNoise}`));
```
```javascript
const thingToDo = animalNoise => console.log(`The animal says ${animalNoise}`);
forEach(animalNoises, thingToDo);
```
```javascript
// ↓built-in JS forEach, not our forEach
animalNoises.forEach((animalNoise) => {
  console.log(`The animal says ${animalNoise}`);
});
animalNoises.forEach(whatTheAnimalDoes);
```
```javascript
const arrayOfFunctions = [func1, func2, func3];

function processor(listOfActions, data) {
  listOfActions.forEach( (eachFunction) => { eachFunction(data) } );
}
```