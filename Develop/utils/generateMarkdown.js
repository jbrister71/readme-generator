function generateTableOfContents(tableOfContents) {
  const {installation, usage, credits, license, features, howToContribute, tests, question, display} = tableOfContents;
  let tableString = '';
  let i = 1;

  if(display) {
    if(installation.display) {
      tableString += `${i}. [${installation.name}](${installation.link})
      `;
      i++;
    }
    if(usage.display) {
      tableString += `${i}. [${usage.name}](${usage.link})
      `;
      i++;
    }
    if(credits.display) {
      tableString += `${i}. [${credits.name}](${credits.link})
      `;
      i++;
    }
    if(license.display) {
      tableString += `${i}. [${license.name}](${license.link})
      `;
      i++;
    }
    /* if(features.display) {
      tableString += `${i}. [${features.name}](${features.link})
      `;
      i++;
    } */
    if(howToContribute.display) {
      tableString += `${i}. [${howToContribute.name}](${howToContribute.link})
      `;
      i++;
    }
    if(tests.display) {
      tableString += `${i}. [${tests.name}](${tests.link})
      `;
      i++;
    }
    if(question.display) {
      tableString += `${i}. [${question.name}](${question.link})
        `;
    }
  }

  return tableString;
};

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

function generateQestions(question) {
  let questionsStr = '';

  questionsStr = `## Questions
    Questions can be directed to [my github profile](https://github.com/${question.username})`;

  if(question.email) {
    questionsStr += ` or email me at [${question.email}](${question.email})`;
  }

  questionsStr += '.';

  return questionsStr;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license.name}](https://img.shields.io/badge/license-${license.name}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[This app is under the ${license.name} license.](${license.link})
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, tableOfContents, installation, usage, credits, license, features, howToContribute, tests, question} = data;
  
  const markdown = `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  ${generateTableOfContents(tableOfContents)}
  ## Installation
  ${generateInstallation(installation)}

  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ${renderLicenseSection(license)}

  ${generateHowToContribute(howToContribute)}

  ${generateTests(tests)}

  ${generateQestions(question)}
`;

  const markdownNoTab = markdown.replaceAll("    ", "");

  return markdownNoTab;
};

module.exports = {
  generateMarkdown
};
