function init () {

  const inquirer = require('inquirer');
  const fs = require('fs'); 
  const generate = require('/Users/alexc/Documents/README_Generator/generateMarkdown.js');
  
  inquirer
    .prompt([
      {
          type: "input",
          message: "What is your GitHub username?",
          name: "github"
      },
      {
        type: "input",
        message: "Include an interesting and descriptive title to your README",
        name: "title",  
           },
      { 
        type: "input",
        message: "Add a detailed description of your project",
        name: "description",  
           },
      {
         type: "input",
         message: "Entail detail about the usage of your project",
         name: "usage",
      },
      {
        type: "input",
        message: "Include information about how developers can contribute to your project",
        name: "contributing",
     },
      {
          type: "input",
          message: "Describe the testing of your project",
          name: "tests",
      },
      {
          type: "checkbox",
          message: "Choose a liscense from the options provided",
          choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
          name: "license",
      },
      
      {
          type: "input",
          message: "Include your e-mail address so those with questions can contact you",
          name: "email"
      },
    ])
    .then((response) => {
     
  
  init();