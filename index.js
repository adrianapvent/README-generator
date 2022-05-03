// TODO: Include packages needed for this application
/* const fs = require('fs'); */ // include File System
const fs = require('fs');
const inquirer = require('inquirer'); // include inquirer
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');

/* const generateMarkdown = require('./src/md-template'); */ // include md-template

// TODO: Create an array of questions for user input
const userQuestions = () => {
console.log(`
=============
User Input
=============
`)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please include a name');
                        return false;
                    }
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
                name: 'github',
                message: 'What is your github username?',
                validate: githubInput => {
                if (githubInput) {
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
// function writeToFile(fileName, data) {}
const promptProjectQ = userData => {
    console.log(`
===============
Project Info
===============
    `)

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'license',
                message: 'Please select a license from the following list:',
                choices: ['MIT', 'APACHE 2.0'],
            },
            {
                name: 'input',
                name: 'title',
                message: 'What is the title of your project?',
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('Please include a title');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project about?',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please include a description');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'technologiesConfirm',
                message: 'Do you want to include a technologies section?',
                default: false
            },
            {
                type: 'checkbox',
                name: 'technologies',
                message: 'What technologies will you use on this project?',
                when: (({technologiesConfirm}) => {
                    if (technologiesConfirm) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }),
                choices: ['HTML5', 'CSS3', 'JavaScript', 'Markdown'],
                validate: response => {
                    if (response.length < 1) {
                        return 'Please choose at least one technology';
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: 'What do i need to install this application?',
                validate: installationInput => {
                    if (installationInput) {
                        return true;
                    } else {
                        console.log('Please include instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: "How do you use the application?",
                validate: usageInput => {
                    if (usageInput) {
                        return true; // stops
                    } else {
                        console.log('This is above the RETURN');
                        return false; // stops
                    }
                }
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'How to contribute to this project?',
                validate: contributingInput => {
                    if(contributingInput) {
                        return true;
                    } else {
                        console.log('Please include information on how-to contribute.')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide a test example.',
                validate: testsInput => {
                    if (testsInput) {
                        return true;
                    } else {
                        console.log('Please include test examples in your application.');
                        return false;
                    }
                }
            },
        ])
        .then((readmeData) => {
            const finalData = Object.assign(userData, readmeData);
            
            return finalData;
        });
}

userQuestions()
    .then(promptProjectQ) // == finalData 
    .then(userInput => {// finalData is sent here
        const sendMarkdownTemplate = generateMarkdown(userInput);

        fs.writeFile('./dist/README.md', sendMarkdownTemplate, (err) => {
            if (err) throw new Error(err);
        });
    });



/* // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); */
