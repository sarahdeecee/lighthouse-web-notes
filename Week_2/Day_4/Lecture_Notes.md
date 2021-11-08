# Promises

What is a callbavk?
A function in another functino (as a parameter)
Why do we need them?
- Async -> to run properly
- Reuse code, more reuseable code
- Higher oder functions (HOF)
  - Use a callback
  - Return a function definition

```javascript
const exampleIngredient = {name: '🥦', quantity: 1};
const fridge = [
  { name: '🥦', quantity: 1 },
  null, //unknown
  { name: '🍟', quantity: 5 },
  { name: '🥐', quantity: 2 },
  { name: '🌮', quantity: 3 }
];

// function check if quantity > 4
// check ingredient
const checkAmountOfBurritos = (fridge, amount) => {
  // iterate over the fridge
  for (let ingredient of fridge) {
    // if ingredient is burrito
    if (ingredient.name === '🌮') {
      // if quantity if bigger than amount     
      if (ingredient.quantity >= amount) {
        return true; // return true
      } else { 
        return false; // else return false
      }
    }
  }
  return null; // null if no burrito
}

//Split up
const checkAmountOfIngredient = (ingredient, amount) => {

}
const checkAmountOfIngredient = (fridge, amount, ingredientName) => {
  // iterate over the fridge
    // if ingredient is burrito
      // if quantity if bigger than amount
        // return true
      // else return false
  for (let ingredient of fridge) {
    if (ingredient.name === ingredientName) {
      if (ingredient.quantity >= amount) {
        return true;
      } else {
        return false;
      }
    }
  }
  return null;
}

const showEveryIngredientInFridge = fridge => {
  //iterate over the fridge
  for (const ingredient of fridge) {
    //console the name of the ingredient
    console.log(ingredient.name);
  }
}
//shows everything
lookAtEveryItemInFridgeAndDoSomething(fridge, (ingredient) => {
  try {
    console.log(ingredient.name);
  } catch(error) {
    console.log("There was an unknown entity in the fridge");
    }
}
```
### Callback Chaining
```javascript
const fridge = [
  { name: '🥦', quantity: 1 },
  { name: '🍟', quantity: 5 },
  { name: '🥐', quantity: 2 },
  { name: '🌮', quantity: 3 }
];

const walkToTheFridge = (fridge, action) => {
  setTimeout(() => { //can't teleport. takes time
    action();
  }, 1000);
}
const pickIngredientFromFridge = (fridge, ingredientToPick) => {

  for (const ingredient of fridge) {
    if (ingredient.name === ingredientToPick) {
      ingredient.quantity--;
    }
  }
}

console.log(francisFridge);
// if we just put pickIngredientFromFridge(x,y) it will run so we put anon func def
walkToTheFridge(francisFridge, (fridge) => {
  pickIngredientFromFridge(fridge, '🥐');
  walktoTheFridge(francisFridge, (fridge) => {
    pickIngredientFromFridge(fridge, '🍟');
  })
}
```
# Promises
```javascript
const fridge = [
  { name: '🥦', quantity: 1 },
  { name: '🍟', quantity: 5 },
  { name: '🥐', quantity: 2 },
  { name: '🌮', quantity: 3 }
];

//only need to use promise for async func
const walkToTheFridge = (fridge, action) => {
  return new Promise(successCallback, errorCallback) => {//always 2 callbacks
    setTimeout(() => { //can't teleport. takes time
      if (Math.random() > 0.5) { //50/50 success
        successCallback(fridge);
      } else {
        errorCallback("fell while walking");
      }
      action(fridge);
    }, 1000);
  }
}

//console.log("I'm about to walk");
console.log(walkToTheFridge(francisFridge)
  .then((fridge) => {
    console.log(fridge)
    return walkToTheFridge(francisFridge);
  });
  .then((fridge) => { //can change .then instead of nesting
    console.log(fridge)
    return walkToTheFridge(francisFridge);
  .catch((error) => console.log(error));
  //.finally(() => console.log("we're done here!") // <--always runs at the end