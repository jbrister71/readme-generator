// Creates the string for the questions section
function generateQuestions(username, email) {
  let questionsStr = '';

  questionsStr = `## Questions
    Questions can be directed to [my github profile](https://github.com/${username})`;

  if(email) {
    questionsStr += ` or email me at [${email}](${email})`;
  }

  questionsStr += '.';

  return questionsStr;
}

// Creates the license badge at the top of page and returns an empty string is no license is chosen
function renderLicenseBadge(license) {
  if(license === 'No License') {
    return '';
  }

  licenseNoSpace = license.replaceAll(" ", "_");
  return `![${license}](https://img.shields.io/badge/license-${licenseNoSpace}-green)`;
}

// Returns a link to the license returned and returns and empty string is no license is chosen
function renderLicenseLink(license) {
  let link = '';

  console.log(license);
  
  if(license == 'Apache License 2.0') {
    link = "https://www.apache.org/licenses/LICENSE-2.0";
  }
  else if(license == 'GNU GPLv2') {
    link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0-standalone.html";
  }
  else if(license == 'GNU GPLv3') {
    link =  "https://www.gnu.org/licenses/gpl-3.0-standalone.html";
  }
  else if(license == 'MIT') {
    link = "https://spdx.org/licenses/MIT.html";
  }
  else if(license == 'ISC') {
    link = "https://www.isc.org/licenses/";
  }
  else {
      link = '';
  }

  return link;
}

// Returns a string explaining which license is used and an empty string if no license is chosen
function renderLicenseSection(license) {
  if(license === 'No License') {
    return '';
  }
  return `## License
  [This app is under the ${license} license.](${renderLicenseLink(license)})`;
}

// Generates markdown for README.md
function generateMarkdown(data) {
  const {title, description, installation, usage, license, contributing, tests, username, email} = data;
  
  const markdown = `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  1. [Installation](#installation)  
  2. [Usage](#usage)  
  4. [License](#license)  
  5. [Contributing](#contributing)  
  6. [Test](#tests)
  7. [Questions](#questions)  

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ${renderLicenseSection(license)}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ${generateQuestions(username, email)}
`;

  const markdownNoTab = markdown.replaceAll("  ", "");

  return markdownNoTab;
};

module.exports = {
  generateMarkdown
};
