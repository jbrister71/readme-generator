// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown.js');
const cf = require('./utils/createFile');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Describe your project (Required): ",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your project (Required): ',
        validate: installationInput => {
            if(installationInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is this project used for?",
        validate: usageInput => {
            if(usageInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "What license is your project under?",
        choices: ['Apache License 2.0', 'GNU GPLv2', 'GNU GPLv3', 'MIT', 'ISC', 'No License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How can others contribute to your project?",
        validate: contributingInput => {
            if(contributingInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: "What sort of tests are used in this project?",
        validate: testInput => {
            if(testInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your github username?",
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                return false;
            }
        }
    }
];

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
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    cf.writeFile(fileName, data)
        .then(console.log('success'));
};

function promptUser() {
    return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(data => {
            return writeToFile('README.md', gm.generateMarkdown(data));
        })
        .then(console.log('File written!'))
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
