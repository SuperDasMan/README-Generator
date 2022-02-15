// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your Email Address!');
        return false,
        console.log(`
        ==============
        Project Data
        ==============
        `);
      } 
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter your Project Title (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your Project Title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your Project Description (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your Project Description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What did you build this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter your Project Installation Instructions (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter Installation Instructions for your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter your Usage Details (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter your Usage Details!');
        return false;
      }
    }
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
        "Apache",
        "Boost",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Unlicense",
        "None"
    ]
  },
  {
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Did any other developers Contribute to this project?',
    default: false,
    validate: confirmContributingInput => {
      return confirmContributingInput ? true : (false, 'No other developers at this time.');
    }
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter the names of any developers Contributed to this project',
    when: ({ confirmContributing }) => confirmContributing
  },
  {
    type: 'confirm',
    name: 'confirmTests',
    message: 'Did you run any Tests on this project?',
    default: true,
    validate: confirmContributingInput => {
      return confirmContributingInput ? true : (false, 'No specified tests were created for this project.');
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What Tests did you run on this project?',
    when: ({ confirmTests }) => confirmTests
  },
  {
    type: 'input',
    name: 'contact',
    message: 'Enter your Contact Instructions for sending Questions regarding this project (Required)',
    validate: contactInput => {
      if (contactInput) {
        return true;
      } else {
        console.log('Please enter your Contact Instructions!');
        return false;
      }
    }
  },
];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, err => {
        
    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
    if (err) {
      throw err;
    }
    console.log('README has been successfully created!');
  });
}


// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}
 
// Function call to initialize app
init()
  .then(ReadMeAnswers => generateMarkdown(ReadMeAnswers))
  .then(NewReadMe => writeToFile("README.md", NewReadMe))
  .catch(err => {
    console.log(err);
});