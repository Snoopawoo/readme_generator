const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let readmedata;

// array of questions for user
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "The title of my project:",
    },
    {
      type: "input",
      name: "description",
      message: "Description of my project:",
    },
    {
      type: "input",
      name: "contents",
      message: "Table of Contents:",
    },
    {
      type: "input",
      name: "installation",
      message: "Instructions for installation:",
    },
    {
      type: "input",
      name: "usage",
      message: "Instructions for use:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Tests:",
    },
    {
      type: "input",
      name: "questions",
      message: "Questions:",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to display?",
      choices: [
        "Boost Software License",
        "MIT License",
        "Apache 2.0",
        "GNU GPL v3",
        "GNU GPL v2",
        "not licensed",
      ],
    },
  ])
  .then(function (answer) {
    readmedata = answer;
  });

// // function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile("README.md", readmedata, (err) =>
//     err ? console.error(err) : console.log("Success!")
//   );
// }

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
