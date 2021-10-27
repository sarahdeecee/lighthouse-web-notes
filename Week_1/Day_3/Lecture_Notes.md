# Week 1 Day 3 (10/27): Objects in JS
## Review
Yesterday, we worked with:
* functions
* arrays
* loops
* conditionals
* refactoring
* nested for loops
* debugging

We want to:
* focus on readability
* break things up to understand better (e.g. nested lists)

### Arrays
```javascript
const someList = ["Pollo", "Poulet", "Chicken"];
const result = someList[1]; //Poulet
console.log(result); //Separate the tasks
```
```javascript
const someComplexList = [ //not so complex if we go one layer at a time
  ["Pollo", "Poulet", "Chicken"],
  ["Gato", "Chat", "Cat"],
];
const firstArray = someComplexList[0];
const result = firstArray[1];
console.log(result); ///find Poulet
```
```javascript
for (const list of someComplexListAgain) {
  for (const element of list) {
    console.log(element);
  }
}
```

## Objects
### Primitive data types
Data type | Truthy | Falsey
--- | --- | ---
Booleans | true | false
Strings | everything but | ""
Numbers | everything but | 0, NaN
Null | x | null
Undefined | x | undefined
Symbol | everything | x
BigInt | everything | 0

What is common among all the falsey values?
* They are 'empty'

## Data structures
### Object
* are always truthy
### Arrays
* are always truthy (derived from objects)
* Note: an array can hold a function
* key of an array is the index

```javascript
const someArray = [1, 2, 3, 4, 5]; // Used when order is important

const someObject = { // Used when we want properties of something
  key: "value"
};
```
```javascript
const someMug = {
  color: "light blue",
  capacity: 400,
  material: "ceramic",
  hasStickers: false,
  hasHandle: true
};

const result1 = someMug.color; //cannot reference variable
const result2  = someMug['color'];
console.log(result1, result2); // both the same

const anotherMug = {
  color: "black",
  batteryLevel: "60%",
  material: ["metal", "ceramic", "lithium", "rubber"], // Can hold an array
  contentRatio: {
    coffee: 70,
    milk: 30,
  },
};

const result1 = anotherMug["contentRaio"]["milk"];
const result2 = anotherMug.contentRatio.milk; // shortcut when you know the key

const singleKey = "batteryLevel";
const listOfKeys = ["color", "batteryLevel"];
const result3 = anotherMug[singleKey];

for (const key of listOfKeys) {
  console.log(anotherMug[key]);
}

const listOfMugs = [someMug, anotherMug];

const consoleTheValueAtASpecificKey = function(obj, key) {
  console.log(object[key]);
};

consoleTheValueAtASpecificKey({ a: 1 }, "a"); // = 1
```

## Methods
```javascript
const aMugAgain = {
  color: "red",
  takeASip: (amount) => { // method, because it's scoped to the obj
    for (let i = 0; i < amount; i++) {
      console.log("LOUDEST SLURP EVER");
      if (this.coffeeAmount > 0) {
        this.coffeeAmount -= 100;
        console.log(`Remaining coffee: ${this.coffeeAmount} ml`);
      } else {
        console.log("NO MAS COFFEE");
      }
      
    }
  },
  what: () => {
    console.log(this);
  },
  mugColor: () => {
    console.log(`The mug is ${this.mugColor}`);
  }
};

aMugAgain.takeASip; // reference the function
aMugAgain.takeASip(20); // call the function
aMugAgain.what(); // prints the whole object
aMugAgain.mugColor(); // prints "The mug is red" 
```