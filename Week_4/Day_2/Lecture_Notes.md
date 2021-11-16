# (11/16) W4D1 Client Side Javascript & jQuery
### Agenda
- Browser Object Model (BOM)
- Document Object Model (DOM)
- Manipulating the DOM with Javascript
- Maniputling the DOM with jQuery

## Browser Object Model (BOM)
The browser object model (BOM) is a **hierarchy of browser objects** that are used to manipulate methods and properties associated with the web browser itself.
- **window** is the top level object in the browser
- window.document -> DOM
- e.g. window.location, window.history.forward()
- [Javascript BOM](https://www.htmlgoodies.com/javascript/using-built-in-javascript-code-with-javascript-objects/)

## Document Object Model
- The document is converted into the DOM
  - Each element (starting at root) is **represented by an object** or **node** in a tree structure
- The DOM is used to **modify the content, structure, or style of the document**
- Document -> ```<html>``` -> ```<head> | <body>``` -> ...
- can access DOM properties in DEV Tools
- [Javascript DOM](https://www.htmlgoodies.com/javascript/using-built-in-javascript-code-with-javascript-objects/)

## Manipulating the DOM with Javascript
The DOM can be manipulated with JavaScript helper functions such as
- document.getElementById(*idSelector*);
- document.getElementByTagName(*tagName*);
- document.getElementByName(*name*);
- document.querySelector(*selector*);
- document.querySelectorAll(*selector*);
  - can use it for a class or tag name
- document.getElementsByClassName(*classSelector*);

## Demo
### My list of todos
```javascript
// use an event
// click event?
// submit

// grab the text from the todo input
const todoFrm = document.getElementById("new-todo-frm");
console.log(todo.elements.todo);

const validateTodo = content => {
  if (!content) {
    return 'Please enter a todo!';
  }
};

todoFrm.addEventListener('submit', function(event) {
  // prevent form submission
  event.preventDefault(); //stop the GET route
  console.log(this); // <--this = the form element
  
  // get the todo input
  const todoInput = this.elements.todo;
  
  // grab the text of the todo input
  todoContent = todoInput.value;

  // document.getElementById("error-msg").innerHTML = ''; //1

  const error = validateTodo(todoContent);
  if (error) {
    const errorElement = document.createElement('h3');
    errorElement.innerText = error;
    // document.getElementById("error-msg").prepend(errorElement); //1
    document.getElementById("error-msg").replaceChild(errorElement);
    return;
  }

  //create a li element
  const newLi = document.createElement(li);
  newLi.innerText = todoContent; //or newLi.textContent = '...'
  console.log(newLi);

  //add a new li element to do the todos ul
  const todoList = document.getElementById('todos');

  todoList.append(newLi);

  //clear the textbox
  todoInput.value = '';
});

//todoFrm.elements.todo <- check in dev tools
```
```html
<div id="error-msg">
</div>
<div>
  <form id="new-todo-frm">
    <label></label>
    <input class="todos" type="text">
<ul id="todos">

</ul>
```
## Manipulating the DOM with jQuery
- jQuery is a fast, small, and feature-rich Javascript library
It makes things **much simpler**
- HTML document transversal and manipulation
- Event handling
- Animation
- Ajax much simpler
- Works across a multitude of browser
### Demos
1. DOM transversal
2. Create HTML dynamically with jQuery

```html
<!-- pet descriptions will go here -->
<section id="pets-container">

</section>
```
```javascript
const pets = {
  name: 'Meowngo',
  type: 'cat',
  age: 2
};

//create an article HTML element using a pet obj
const createPetElement = petObj => {
  const petElement = `<article>
    <header>
      <h2>${petObj.name}</h2>
    </header>
    <div class="content">
      <ul>
      <li><span>Species: ${petObj.type}</span></li>
      <li><span>Age: ${petObj.age}</span></li>
    <footer>${petObj.name} is a ${petObj.type} and is ${petObj.age} ${petObj.age < 2 ? 'year' : 'years'} old.</footer>
    </article>`;
  return petElement;
}

const renderPetElements = (petsArr, container) => {
  // iterate through the list of pets (pets array)
  for (let petObj of petsArr) {
    // create an article HTML element for each petObj
    const petElement = createPetElement(petObj);
    // add each article HTML element to the pets container
    container.append(petElement); //append only, no appendchild
  }
};

// before DOM manipulation, we need it to be fully loaded
$(document).ready(function(){ //function is a callback
  // any DOM manipulation
  renderPetElements(pets, $('#pets-container'));
})
```