// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[!License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  else if (license === 'GNU GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  else if (license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || 'Apache' || 'GNU GPL' || 'Mozilla') {
    return `
<h2 id="license">License</h2>
${renderLicenseLink(license)}`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(license)}
  ## Description
  ${description}
  
  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usage}
  
  ${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ## Questions 
  If you have any questions, contact me at:
  
  * Github: ${github}
  * Email: ${email}
`;
}

module.exports = generateMarkdown;
