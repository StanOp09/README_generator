// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache', 'GNU', 'None'],
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
];

// Create a function to write README file
function generateREADME(response) {
    // Generate the badge based on the selected license
    const licenseBadge = generateLicenseBadge(response.license);

    return `
  # ${response.projectTitle}
  
  ${licenseBadge}
  
  ## Description
  ${response.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${response.installation}
  
  ## Usage
  ${response.usage}
  
  ## License
  This project is licensed under the ${response.license} license.
  
  ## Contributing
  ${response.contribution}
  
  ## Tests
  ${response.tests}
  
  ## Questions
  For any questions or suggestions, feel free to reach out to me on GitHub: [${response.githubUsername}](https://github.com/${response.githubUsername}) or via email: ${response.email}.
  `;
  }

  function generateLicenseBadge(license) {
    let badge;
    switch (license) {
      case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'Apache':
        badge = '[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'GNU':
        badge = '[![License: GNU](https://img.shields.io/badge/License-GNU-green.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      default:
        badge = '';
        break;
    }
    return badge;
  }

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('README_professional.md is successfuly created!'))
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => generateREADME(response))
        .then((readmeContent) => writeToFile('README_professional.md', readmeContent))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
