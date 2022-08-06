// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

const mockData = {
    title: "projectTitle",
    description: "project description",
    tableOfContents: [
        installation = {
            name: "Installation",
            display: true
        },
        usage = {
            name: "Usage",
            display: true
        },
        credits = {
            name: "Credits",
            display: true
        },
        license = {
            name: "License",
            display: true
        },
        features = {
            name: "Features",
            display: false
        },
        howToContribute = {
            name: "How to Contribute",
            display: true
        },
        tests = {
            name: "Tests",
            display: false
        },
        display = true
    ],
    installation: [
        "Step 1: Follow the first step",
        "Step 2: Follow the second step",
        "Step 3: Follow the third step",
        "Step 4: Follow the fourth step"
    ],
    usage: "This is useful for doing things",
    credits: "I made this",
    license: "My License",
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
