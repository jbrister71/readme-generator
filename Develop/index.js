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
        howToContribute: {
            name: "Contributing",
            link: "#contributing",
            display: true
        },
        tests: {
            name: "Tests",
            link: "#tests",
            display: true
        },
        question: {
            name: "Questions",
            link: "#questions",
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
    howToContribute: "You can contribute by contributing",
    tests: "The test kind",
    question: {
        username: 'jbrister71',
        email: "email@email.email"
    }
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
