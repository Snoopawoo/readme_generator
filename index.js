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
      name: "questionsgithub",
      message: "Questions 1 (enter github name):",
    },
    {
        type: "input",
        name: "questionsemail",
        message: "Questions 2 (enter email):",
    },
    {
        type: "input",
        name: "questionsinst",
        message: "Questions 3 (instructions for questions):",
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
    const license = answer.license;
    let licenseUrl;
 
    switch (license) {
      case "Boost Software License":
        licenseUrl = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "MIT License":
        licenseUrl = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache 2.0":
        licenseUrl = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GNU GPL v3":
        licenseUrl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "GNU GPL v2":
        licenseUrl = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        break;
      case "not licensed":
        licenseUrl = "![License: Nolicense](https://img.shields.io/badge/License-Not--licensed-red.svg)";
        break;
    }
    fs.writeFile('README.md', `
# ${answer.title}
${licenseUrl}

## Description

${answer.description}

## Table of Contents

 - [Installation](#installation)
 - [Usage](#usage)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation

${answer.installation}

## Usage

${answer.usage}

## License 

This application is cover under the: ${answer.license}

## Contributing

${answer.contribution}

## Tests

${answer.tests}

## Questions

For questions, contact me at:
 - Github: [Github](https://github.com/${answer.questionsgithub})
 - Email: ${answer.questionsemail}
 - ${answer.questionsinst}

    `, (err) =>
      err ? console.error(err) : console.log('Readme Created!')
    );
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
