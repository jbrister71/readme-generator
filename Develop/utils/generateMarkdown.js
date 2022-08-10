function generateTableOfContents(tableOfContents) {
  const {installation, usage, credits, license, features, howToContribute, tests, display} = tableOfContents;
  let tableString = '';
  
  if(display) {
    console.log('here');
    if(installation.display) {
      tableString += `[${installation.name}](${installation.link})
      `;
    }
    if(usage.display) {
      tableString += `[${usage.name}](${usage.link})
      `;
    }
    if(credits.display) {
      tableString += `[${credits.name}](${credits.link})
      `;
    }
    if(license.display) {
      tableString += `[${license.name}](${license.link})
      `;
    }
    if(features.display) {
      tableString += `[${features.name}](${features.link})
      `;
    }
    if(howToContribute.display) {
      tableString += `[${howToContribute.name}](${howToContribute.link})
      `;
    }
    if(tests.display) {
      tableString += `[${tests.name}](${tests.link})
      `;
    }
  }

  return tableString;
};

function generateInstallation(installation) {
  let installationStr = '';

  for(let i = 0; i < installation.length; i++) {
    installationStr += `Step ${i+1}: ${installation[i]}`;
    if(i < installation.length-1) {
      installationStr += `
      `;
    }
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
    howToContributeStr = `## How to Contribute
    ${howToContribute}`
  }

  return howToContributeStr;
};

function generateTests(tests) {
  let testsStr = '';

  if(tests) {
    testsStr = `## Tests
    ${tests}`
  }

  return testsStr;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license.name}](https://img.shields.io/badge/license-${license.name}-green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `${license.link}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseLink(license)}
  ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, tableOfContents, installation, usage, credits, license, features, howToContribute, tests} = data;
  
  return `# ${title}

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

  ${generateFeatures(features)}

  ${generateHowToContribute(howToContribute)}

  ${generateTests(tests)}
`;
};

module.exports = {
  generateMarkdown
};
