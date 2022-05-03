// TODO: Include packages needed for this application
const fs = require('fs'); // include File System
const inquirer = require('inquirer'); // include inquirer
const generateMarkdown = require('./src/md-template'); // include md-template
// TODO: Create an array of questions for user input
const userQuestions = () => {
    console.log(`
    =============
    User Input
    =============
    `)
    return inquirer( [
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: (nameInput) {
                    return true;
                }
                else {
                    console.log('Please include a name');
                    return false;
                }
            },
            {
                type: 'input',
                name: 'occupation',
                message: 'What is your occupation?',
                validate: occupationInput => {
                    if (occupationInput) {
                        return true;
                    }
                    else {
                        console.log ('Please include an occupation');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    else {
                        console.log('Please include email');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github'
                message: 'What is your github username?',
                validate: githubInput => {
                    return true;
                } else {
                    console.log('Please add github Username');
                    return false;
                }
            }
        }
    ]);    
};
    
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
