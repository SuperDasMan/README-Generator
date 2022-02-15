const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  licenseBadge = `[![License:${license}](https://img.shields.io/badge/License-${license}-aqua)](https://choosealicense.com/licenses/${license})`;
    if (license === '') {
      return false;
  } else {
  return `## ${licenseBadge}`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  licenseLink = `[![${license}]](https://choosealicense.com/licenses/${license})`;
    if (license === '') {
      return false;
    } else {
    return `${licenseLink}`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseSection = `[License](#license)`;
    if (license === '') {
      return false;
    } else {
    return `## ${licenseSection}`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `  
  ${[data]
  .map(({ name, github, email, title, description, languages, installation, usage, license, contributing, tests, contact }) => {
  return `# ${title}

${renderLicenseBadge(license)}


## Description

${description}

Built with:

${languages.map(language => language).join('/n - ')}


## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


## Installation

${installation}


## Usage

${usage}


## License

${renderLicenseSection(license)}

This application is covered by the [${license}](${renderLicenseLink(license)}) license.

Check out the badges hosted by [shields.io](https://shields.io/).


## Contributing

${contributing}


## Tests

${tests}


## Questions

${contact}[GitHub: ${github}](https://github.com/${github}) or [Email me](mailto:${email})

_This README was generated with ❤️ by ${name} using [README-generator](https://github.com/SuperDasMan/README-Generator)_
`;
})
}
`;
}

renderLicenseBadge(); 
renderLicenseLink(); 
renderLicenseSection();
module.exports = generateMarkdown; 