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

  // Generate Table of Contents conditionally based on user responses
  let readmeToC = `## Table of Contents`;

  if (data.installation !== '') { 
    readmeToC += `
  * [Installation](#installation)`; 
  }

  if (data.usage !== '') { 
    readmeToC += `
  * [Usage](#usage)`; 
  }

  if (data.contributing !== '') { 
    readmeToC += `
  * [Contributing](#contributing)`; 
  }

  if (data.tests !== '') { 
    readmeToC += `
  * [Tests](#tests)`; 
  }

  // Generate markdown for the top required portions of the README
  let readmeMarkdown = 
  `# ${data.title}

  ![Badge for using NodeJS](https://img.shields.io/badge/NodeJS-100%25-brightgreen)
  ![Badge for License](https://img.shields.io/badge/License-${license}-aqua)
  
  Check out the badges hosted by [shields.io](https://shields.io/).


  ## Description

  ${data.description}
  
  `;


  // Add Table of Contents to markdown
  readmeMarkdown += readmeToC;
 
  // Add License section since License is required to Table of Contents
  readmeMarkdown += `
  * [License](#license)`;

  // Optional Installation section
  if (data.installation !== '') {
  
    readmeMarkdown +=
    `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${data.installation}`;
  }
  

  // Optional Usage section
  if (data.usage !== '') {
  
    readmeMarkdown +=
    
    `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${data.usage}`;
  }
  
  
  // Optional Contributing section
  if (data.contributing !== '') {

    readmeMarkdown +=
      
    `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${data.contributing}`;
  }
  

  // Optional Tests section
  if (data.tests !== '') {
  
    readmeMarkdown +=
    `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${data.tests}`;
  }


  // License section is required
  readmeMarkdown +=
  `
  
  ## License
  
  ${data.license}
  `;


  // Questions / About Developer section
  let readmeDev = 
  `
  ---
  
  ## Questions?
  
  For any questions, comments, or bug reports, please contact me with the information below:
 
  GitHub: [@${githubInput}](${githubLinkInput})
  `;

  // If GitHub email is not null, add to Developer section
  if (emailInput !== null) {
    readmeDev +=
    `
    Email: ${emailInput}
  `;
  }

  // Add developer section to markdown
  readmeMarkdown += readmeDev;

  // Return markdown
  return readmeMarkdown;
  
}


renderLicenseBadge(); 
renderLicenseLink(); 
renderLicenseSection();
module.exports = generateMarkdown();
