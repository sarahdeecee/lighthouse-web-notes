# Automataed testing
* The main goal of automated testing is to **improve overall code quality**

### Other benefits include
* Save time compared to manual testing
* Easy to see if new changes to our code is breaking anything
* Think about potential bugs up-front
* Write more modular code
* Could be integreated into build workflow

## Test-Driven Development
#### What is it?
* Test-driven development (TDD) relies on tests to drive development
* In other words, write the test first
1. **Write a failing test** to indicate which functionality needs to be added and how it should behave
2. **Write the minimal amount of code** to make the test pass. At thtis stage, the code doesn't have to be elegant or clean.
3. **Refactor the code.** Clean up the vode to make it more readable and maintainable.

# Demo
1. [Node JS Assert](https://nelsonic.gitbooks.io/node-js-by-example/content/core/assert/README.html)
2. Mocha
3. Chai

```javascript
const numberOfVowels = str => {
  let number = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // if (!str) {
    //   throw new Error('please provide a string');
  // }

  for (let char of str) {
    if (vowels.includes(char)) {
      number++;
    }
  }
};

module.exports = numberOfVowels;
```
```javascript
// move to test folder/file
const assert = require('assert'); //don't need to install because it's included in node
const numberOfVowels = require('.../numberOfVowels');
// const assert = require('assert').strict; //overwrites equal to be strict equal

// try catch ensures program will continue to run
try {
  // tomato
  console.log('numberOfVowels() with tomato🍅 should have 3 vowels');
  assert.equal(
    numberofVowels('tomato🍅'),
    3,
    'it should be 3 vowels with tomato🍅'
  );
  console.log("Passed ✅");
} catch(err) {
  console.log("Failed ❌");
  console.log(`actual: ${err.actual}, expected: ${err.expected}`);
}

try {
  // watermelon
  console.log('numberOfVowels() with watermelon🍉 should have 4 vowels');
  assert.equal(
    numberofVowels('watermelon🍉'),
    4,
    'it should be 4 vowels with watermelon🍉'
  );
  console.log("Passed ✅");
} catch(err) {
  console.log("Failed ❌");
  console.log(`actual: ${err.actual}, expected: ${err.expected}`);
}
 
try {
  // sweet potato
  console.log('numberOfVowels() with sweet potato🍠 should have 5 vowels');
  assert.equal(
    numberofVowels('sweet potato🍠'),
    5,
    'it should be 4 vowels with sweet potato🍠'
  );
  console.log("Passed ✅");
} catch(err) {
  console.log("Failed ❌");
  console.log(`actual: ${err.actual}, expected: ${err.expected}`);
}
```

**Try Catch** handle errors more gracefully.
allows the script to continue even after an error

```javascript
try {
  // What we need to execute
} catch (error) {
  // Executes if an error is thrown
}
// script continues...
```

## Let's use Mocha
* npm install mocha --save-dev
  * development dependency
  * only want to install in development mode
* npm init to make our json file
  * (rm package.json to remove)

```javascript
//describe block => describe the function that you're testing
// it block => indiviual assertions made on that function

describe('numberOfVowels()', () => {

  it('should have 3 vowels with tomato🍅', () => {
    const result = numberOfVowels('tomato🍅');
    assert.equal(result, 3);
  });

  it('should have 4 vowels with watermelon🍉', () => {
    const result = numberOfVowels('watermelon🍉');
    assert.equal(result, 4);
  });

  it('should have 5 vowels with sweet potato🍠', () => {
    const result = numberOfVowels('sweet potato🍠');
    assert.equal(result, 5);
  });
});
```

Note: You can try `npm list -g --depth 0` to get a simple list of all globally installed packages (the `--depth 0` flag makes sure it only tells you the names of the top-level packages instead of drilling into every single sub-package)

Mocha can work with any assertion library (node, Chai)

```javascript
const { expect } = require('chai');
const { findPetByName, addNewPet } = require('../pet_adoption'); // destructured

//const pets = addNewPet = require('../pet_adoption').addNewPet;
//const pets = addNewPet = require('../pet_adoption').findPetByName;

const addNewPet = function (name, gender, breed, type, age, petsArr) {
  const newPet = {
    name, gender, breed, type, age,
  };
  
  petsArr.push(newPet);
  return petsArr
};

module.exports = { findPetByName, addNewPet }; // curly brackets bc multiple functions, can only take one argument
// =  module.exports = { findPetByName: findPetByName, addNewPet: addNewPet };
// module exports is a function
```
```javascript

describe('findPetByName()', () => {
  it('Should return the pet object that matches the pet name `Coco`', () => {
    const result = findPetByName('Coco', pets);
    expect(result).to.deep.equal({
      name: 'Coco',
      gender: 'Female'
      breed: 'Russell Terrier',
      type: ,
      age: 5,
    });
  });
});

describe('addNewPet', () => {
  it('should add a new pet for adoption', () => {
    const result = addNewPet('Rosie', 'Female', 'Domestic Cat', '🐱', 2, pets);
    expect(result).to.have.length(3);
    expect(result).to.deep.include.({ // check of obj included in the array
      name: 'Rosie',
      gender: 'Female',
      breed: 'Domestic Cat',
      type: '🐱'
      age: 2
    })
  })

})
```