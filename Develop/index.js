// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown.js');
const cf = require('./utils/createFile');

// TODO: Create an array of questions for user input
const questions = [];

const mockData = {
    title: "projectTitle",
    description: "project description",
    tableOfContents: {
        installation: {
            name: "Installation",
            link: "#installation",
            display: true
        },
        usage: {
            name: "Usage",
            link: "#usage",
            display: true
        },
        credits: {
            name: "Credits",
            link: "#credits",
            display: true
        },
        license: {
            name: "License",
            link: "#license",
            display: true
        },
        features: {
            name: "Features",
            link: "#features",
            display: true
        },
        howToContribute: {
            name: "How to Contribute",
            link: "#how to contribute",
            display: true
        },
        tests: {
            name: "Tests",
            link: "#tests",
            display: true
        },
        display: true
    },
    installation: [
        "Follow the first step",
        "Follow the second step",
        "Follow the third step",
        "Follow the fourth step"
    ],
    usage: "This is useful for doing things",
    credits: "I made this",
    license: {
        name: "GNU",
        link: "https://www.gnu.org/licenses/gpl-3.0-standalone.html"
    },
    features: "The feature kind",
    howToContribute: "You can contribute by contributing",
    tests: "The testy kind"
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    cf.writeFile(fileName, data)
        .then(console.log('success'));
}

// TODO: Create a function to initialize app
function init() {
    writeToFile('README.md', gm.generateMarkdown(mockData));
}

// Function call to initialize app
init();
