## 10/26 Lecture: W1D2 - The Dev Workflow
Dom - Instructor Manager
Curriculum Overview
Software Fundamentals (1-2)
Week 1:
FOCAL: Functions, objects, conditionals, arrays, loops
Dev Approach: Code style & quality, testing, debugging, problem solving
FF: Programming test #1 (mock) && recursion
Week 2
Asynchronous control flow (callbacks, promises). Networking, HTTP & API.
PSM and packages. Unit testing with mocha & chai

Fundamental Fridays - programming tests, computer science topics, research, reflect & write
Week 6: Miderm project
Good real world prep!
We define the teams, stack, and requirements (jkust like in the real world!) (from a list of 10)
Practice the fundamentals you’ve learned
Introduction to project management, lifecycle and co
Weeks 11-12 Final project

Four Major Solo Projects
W3: TinyApp - URL Shortener (Bit.ly Clone)
W4: Tweeter (Twitter Clone) (front end project)
W7-8: Interview Scheduler (React)
W9-10: Jungle (Rails; not evaluated)
Programming tests
6 in total, starting in week 1. Focused on FOCAL, not building apps. (Just as important as the projects. No more. No less.)
Mock test on W1D5, our first Fundamental Friday.
Two Tech Interviews (Weeks 3, 9)
1-on-1 session with a mentor, will ask technical questions and the content from the previous week. Problem solving without a computer. Describe the problem using what you remember. A good time to touch base with you.
Quizzes (MC) (Weeks ?)


### Approach to lectures:
Instructure provides a Zoom link 15-20 min before the lecture. You’re welcome to join to just chill and have a chat.
Lecture starts at 10:30 EST. Be on time!
10-min break around 11:30
Expect lectures to be 2.5 (as it will probably go overtime)
Have your camera turned on. We would like the lecture to be engaging!
Lecture notes, code, and video recording are going to be sent out after lecture.
Mix of theory and practice, more practice.
Provide context and explain why. 
More code demonstration (like pair coding)
Focused on the approach
Problem solving
Step-by-step incremental development
Error driven development
To ask a question
Raise your hand (ALT/Option-Y) or use the chat
Please, leave the chat to the instructor for questions (instead of chatting with classmates)
NOT a coding-along session
Lecture time is NOT a good time to catch up from the previous day
### Tools
*Shortcuts
*Bracket pair colorizer v2 (VSCode extension)
### Version Control - GIT
* GIT workflow
* GIT commands
* git add origin: link repo to local folder
* git remote -v: see which repo is assigned (git remote rm origin to remove)
* git add . (./--/* = all, adds everything in the current folder that hasn't been added yet)
  * red = not ready to commit, needs to be added
  * green = ready to commit
* git log to see history of changes

### Incremental development
* List the steps in order to ssolve a problem - don't think about the syntax
* Step-by-step process
  1 State the hypothesis
  2 Verify the hypothesis (Does output match expectation?)
  3 Make changes
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