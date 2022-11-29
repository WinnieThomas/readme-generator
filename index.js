// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter project description?',
    
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions?',
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions?',
    
    },
    {
        type: 'list',
        name: 'license',
        message: 'License of the project?',
        choices:["MIT","ISC","Apache"]
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Contributions ?',
    
    },
    
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions?',
    
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email link for more questions?',
    
    },
    {
        type: 'input',
        name: 'github',
        message: 'github link for more questions?',
    
    },
];



// Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
       .then ((answers) =>{
       const markdown = generateMarkdown(answers);
       //write file readme.md
       fs.writeFile('Samplereadme.md', markdown, (err) =>
          err ? console.log(err) : console.log('Successfully created Readme.md!')
        );
       })
       .catch((err) => console.error(err));}
    // Function call to initialize app
    init();
