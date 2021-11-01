// const myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);


// const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
// const evens = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log("Subset of even numbers:", evens);

//------------------------

// const animals = [
//   { name: 'Fluffykins', species: 'rabbit'},
//   { name: 'Caro', species: 'dog'},
//   { name: 'Hamilton', species: 'dog'},
//   { name: 'Harold', species: 'fish'}
// ]

// // let dogs = animals.filter(function(animal) {
// //   return animal.species ==='dog'
// // });

// const isDog = function(animal) {
//   return animal.species ==='dog'
// }

// let dogs = animals.filter(isDog);

// console.log(dogs);

// // const names = [];
// // for (let i = 0; i < animals.length; i++) {
// //   names.push(animals[i].name);
// // };

// const names = animals.map(animal => animal.name);
// console.log(names);

//------------------------

// const arr = [25, 8, 7, 41];
// const result = arr.sort((a,b) => a - b);
// console.log(result);
// const result2 = arr.sort((a,b) => b - a);
// console.log(result2);

let name = {
  firstname: 'sarah',
  lastname: 'dela cruz',
  // printFullName: function() {
  //   console.log(this.firstname, this.lastname);
  // }
};
//name.printFullName();
let name2 = {
  firstname: 'steve',
  lastname: 'rogers'
}

//function borrowing, using func from one obj with data of another obj
// name.printFullName.call(name2);

const printFullName = function(hometown, state) {
  console.log(this.firstname, this.lastname, 'from', hometown,state);
}

printFullName.call(name, "Toronto", "Ontario"); // pass arguments individually
printFullName.apply(name2, ["New York", "New York"]); // pass arguments in an array
let printMyName = printFullName.bind(name2, "New York", "New York"); // indirectly called
// bind gives a copy of the method that canbe invoked later
console.log(printMyName);
printMyName();