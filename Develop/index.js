// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown.js');

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
            display: false
        },
        howToContribute: {
            name: "How to Contribute",
            link: "#how to contribute",
            display: true
        },
        tests: {
            name: "Tests",
            link: "#tests",
            display: false
        },
        display: true
    },
    installation: [
        "Step 1: Follow the first step",
        "Step 2: Follow the second step",
        "Step 3: Follow the third step",
        "Step 4: Follow the fourth step"
    ],
    usage: "This is useful for doing things",
    credits: "I made this",
    license: {
        name: "GNU",
        link: "https://www.gnu.org/licenses/gpl-3.0-standalone.html"
    },
    features: undefined,
    howToContribute: "You can contribute by contributing",
    tests: undefined
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(gm.generateMarkdown(mockData));
}

// Function call to initialize app
init();
