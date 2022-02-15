const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = "https://img.shields.io/badge/License-" + license + "-aqua";
    if (license === '') {
      return false;
  } else {
  return `# ${licenseBadge}`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseLink = `https://choosealicense.com/licenses/${license}`;
    if (license === '') {
      return false;
    } else {
    return `# ${licenseLink}`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseSection = `[License](#license)`;
    if (license === '') {
      return false;
    } else {
    return `# ${license}`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `  
  ${[data]
  .map(({ name, github, email, title, description, languages, installation, usage, license, contributing, tests, contact }) => {
  return `
  # ${title}  
  ${renderLicenseBadge(license)}
  <br />
  <br />
  ## Description
  ${description}
  <br />
  ${languages.map(language => language).join(',')}
  <br />
  <br />
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  <br />
  <br />
  ## Installation
  ${installation}
  <br />
  <br />
  ## Usage
  ${usage}
  <br />
  <br />
  ## License
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  <br />
  Check out the badges hosted by [shields.io](https://shields.io/).
  This application is covered by the ${license} license. 
  <br />
  <br />
  ## Contributing
  ${contributing}
  <br />
  <br />
  ## Tests
  ${tests}
  <br />
  <br />
  ## Questions
  ${contact}
  <br />
  <br />
  Find me on GitHub: [${github}](https://github.com/${github})
  <br />
  <br />
  Email me with any questions: ${email}
  <br />
  <br />
  _This README was generated with ❤️ by ${name}using [README-generator](https://github.com/SuperDasMan/README-Generator)_
  `;
})
}
`;
}

renderLicenseBadge(); 
renderLicenseLink(); 
renderLicenseSection();
module.exports = generateMarkdown; 