const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown.js');
const cf = require('./utils/createFile');

// Array of question objects for inquirer to iterate through
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
        type: 'list',
        name: 'license',
        message: "What license is your project under?",
        default: 5,
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

// function that calls the fs writeFile to write the README.md file
function writeToFile(fileName, data) {
    cf.writeFile(fileName, data)
        .then(console.log('success'));
};

// Starts inquirer to ask all of the questions in the questions array
function promptUser() {
    return inquirer.prompt(questions);
}

// A series of promises to ask questions, create the markdown string, and then write the file.
function init() {
    promptUser()
        .then(data => {
            return writeToFile('README.md', gm.generateMarkdown(data));
        })
        .then(writeFileResponse => {
            console.log('File written!')
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
