// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('generateREADME.md', data, (err) =>
    err ? console.log(err) : console.log('Created README'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this project?'
        },
        {
            type: 'input',
            name: 'decription',
            message: 'What was the motivation behind making the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use the program?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        
    ])
}

// Function call to initialize app
init((data) => {
    const content = generateMarkdown(data);
    writeToFile(content)
});
