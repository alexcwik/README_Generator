// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');


// TODO: Create an array of questions for user input

const questions = ([
    {
     type: 'input',
     message: 'What is the name of your README file?',
     name: 'title',   
    },

    {
    type: 'input',
    message: 'Provide a detailed description of your product',
    name: 'text',
    },


])

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, ''))

  function init(){}

  init();
});



 


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {



// TODO: Create a function to initialize app

    
