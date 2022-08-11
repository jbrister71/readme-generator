function generateInstallation(installation) {
  let installationStr = '';

  for(let i = 0; i < installation.length; i++) {
    installationStr += `Step ${i+1}: ${installation[i]}.  
    `;
  }

  return installationStr;
};

function generateFeatures(features) {
  let featureStr = '';
  
  if(features) {
    featureStr = `## Features
    ${features}`;
  }

  return featureStr;
};

function generateHowToContribute(howToContribute) {
  let howToContributeStr = '';

  if(howToContribute) {
    howToContributeStr = `## Contributing
    ${howToContribute}`
  }

  return howToContributeStr;
};

function generateTests(tests) {
  let testsStr = '';

  if(tests) {
    testsStr = `## Tests
    `;
    testsStr += `${tests}`;
  }

  return testsStr;
};

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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License') {
    return '';
  }

  licenseNoSpace = license.replaceAll(" ", "_");
  return `![${license}](https://img.shields.io/badge/license-${licenseNoSpace}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License') {
    return '';
  }
  return `## License
  [This app is under the ${license} license.](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
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
