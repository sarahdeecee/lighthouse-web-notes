# 10/26 W1D2: The Dev Workflow
* Dom - **Instructor Manager**
## Curriculum Overview
### Software Fundamentals (1-2)
#### Week 1:
* **FOCAL:** Functions, objects, conditionals, arrays, loops
* Dev Approach: Code style & quality, testing, debugging, problem solving
* FF: Programming test #1 (mock) && recursion
#### Week 2
* Asynchronous control flow (callbacks, promises). Networking, HTTP & API. NPM and packages. Unit testing with Mocha & Chai
* FF: Programming test #2 && Object-oriented programming
### Web App Fundamentals (3-5)
#### Week 3
* Your first web app -- HTTP Servers, Express.js, Cookies, Basic HTML & Forms
* FF: Programming test #3 && Data structures (mostly: trees)
#### Week 4
* Front-end -- Client-side JS, browsers, jQuery, HTML, CSS, BOX Model, AJAX
* FF: Programming test $4 && Algorithm complexity
#### Week 5
* Data -- Relational databases, SQL, data design, postgres
* FF: Programming test #5 (SQL) && Midterm kickoff!
### Midterm Project (6)
#### Week 6
* **Good real world prep!**
* We define the teams, stack, and requirements (just like in the real world!) (from a list of 10)
* Practice the fundamentals you’ve learned\
* Introduction to project management, lifecycle and collaboration (with Git)
* No lectures this week!
* FF: Demo to peers on Friday (no proramming test) && career / resume prep
### Web Frameworks (7-10)
* **Lots of time with Modern Web Stacks & Frameworks!**
* Single page apps with React, Webpack, Bable, JSX
* Real-time apps with WebSockets
* Automated testing for web applications ... (going beyond Unit Testing)
* Class-based / Classical OOP with Ruby
* Ruby on Rails
* Adopting existing code... (mimic the real world / your first job(s))
* FF: Research, Reflect, and Write (a blog post / summary)
  * Choose from a list of topics
  * && Programming Tests #6 and #7
### Final project (11-12)
* **Get creative, explore, and build your CV!**
* This time, **YOU** define the teams, stack, and requirements
* Bring everything you've learned together (while going beyond)
* More practice with project management, lifecycle and collaboration
* No lectures, but some advanced topic lectures!
* FF: None

### **Fundamental Fridays**
* Programming tests
* Computer science topics
* Research, reflect & write
### Four Major Solo Projects
Week | Project
--- | ---
Week 3: | TinyApp - URL Shortener (Bit.ly Clone)
Week 4: | Tweeter (Twitter Clone) (front end project)
Weeks 7-8: | Interview Scheduler (React)
Weeks 9-10: | Jungle (Rails; not evaluated)
### Programming tests
* 6 in total, starting in week 1. Focused on FOCAL, not building apps.
  * Just as important as the projects. No more. No less.)
* Mock test on W1D5, our first Fundamental Friday.
### Tech Interviews
* Weeks 3, 9
### Quizzes
* Multiple choice
* First 5 weeks
### Mentor sessions
* 1-on-1 session with a mentor
* Will ask technical questions and the content from the previous week. Problem solving without a computer. Describe the problem using what you remember.
* A good time to touch base with you.

## Approach to lectures:
* Instructure provides a Zoom link 15-20 min before the lecture. You’re welcome to join to just chill and have a chat.
* Lecture starts at 10:30 EST. Be on time!
* 10-min break around 11:30
* Expect lectures to be 2.5 (as it will probably go overtime)
* Have your camera turned on. We would like the lecture to be engaging!
* Lecture notes, code, and video recording are going to be sent out after lecture.
* Mix of theory and practice, more practice.
* Provide context and explain why. 
* More code demonstration (like pair coding)
* Focused on the approach
  * Problem solving
  * Step-by-step incremental development
  * Error driven development
* To ask a question
  * Raise your hand (ALT/Option-Y) or use the chat
  * Please, leave the chat to the instructor for questions (instead of chatting with classmates)
* NOT a coding-along session
* Lecture time is NOT a good time to catch up from the previous day
### Tools
* Shortcuts
  * Learn your shortcuts!! Don't use the mouse!
  * VS Code Cheat Sheet
    * [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    * [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
    * [Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)
* Useful Add-ons
  * Eslint
  * Bracket matching
  * Prettier (but not for the first few weeks)
* Google
  * Good habit to search for a solution (Stack overflow)
### Version Control - GIT
* GIT workflow
  * add files to staging area, commit changes, update github
* GIT commands
  * git status
  * git add origin
    * link repo to local folder
  * git remote -v
    * see which repo is assigned
    * git remote rm origin to remove
  * git add .
    * ./--/* = all, adds everything in the current folder that hasn't been added yet
    * red = not ready to commit, needs to be added
    * green = ready to commit
  * git push
  * git pull
  * git log
    * to see history of changes
### Incremental development
#### How to approach problem solving
* List the steps in order to solve a problem - don't think about the syntax
* Step-by-step process
  1. State the hypothesis
  2. Verify the hypothesis (Does output match expectation?)
  3. Make changes
* Code readability - make it easy for others to understand

## Demo
Write a node program that takes an unlimited # of command line arguments, goes through each and prints out the sum of them.
If any argument is not a whole number, skip it. Do support negative numbers. If any argument is not a number, output an error message. We need at least 2 arguments.

```javascript
//Take in an unlimited number of CL arguments
//Edge case: Need at least 2 args
//Goes through each argument
//Edge case: if any arg is not a whole number, skip it
//Edge case: if any arg is not a number, output error message
//Print out the sum
```

```javascript
//Take in an unlimited number of CL arguments
//Edge case: Need at least 2 args
(process.argv.slice(2).length < 2) {
  console.log("Needs at least 2 arguments");
  process.exit();
} else {
  const numbers = process.argv.slice(2);
}
console.log(`Args: ${numbers}`);

//convert to numbers
const convertToNum = (numbers) => {
  const outputNums = [];
  for (let num of numbers) {
    outputNums.push(Number(num));
  }
  return output;
};

//is it an integer?
const allIntegers = numbers => {
  const outputNums = [];
  for (let num of numbers) {
    if (Number.isInteger(num)) {
      outputNums.push(num);
    } 
  }
  return output;
};

const allNumbers = number => {
  for (let num of numbers) {
    if (isNaN(num)) {
      console.log('Please input only numbers');
      process.exit();
    }
  }
  return numbers;
}

const sum = (numbers) => {
  console.log(`Numbers: ${numbers}`);
  
  //accumulator
  let total = 0;
  //Goes through each argument
  for (let num of numbers) { //no index value with for...of loop - but we don't need it here

    //Edge case: if any arg is not a whole number, skip it

    //Edge case: if any arg is not a number, output error message
    total += num;  
  }
  
  //Print out the sum
}
const result = sum(allNumbers(allIntegers(convertToNum(args))));
console.log(`Result: ${result}`);
```

### Single responsibility
A function should have a single goal