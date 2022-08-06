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
  return `${renderLicenseLink(license)}
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
  Placeholder

  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ## License
  ${renderLicenseSection(license)}

  ## Features
  Placeholder

  ## How to Contribute
  Placeholder

  ## Tests
  Placeholder
`;
};

module.exports = {
  generateMarkdown
};
