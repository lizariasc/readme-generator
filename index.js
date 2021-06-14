// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the name of your project?"
 },
 {
    type: "input",
    name: "description",
    message: "Provide a description of the project" 
 },
 {
    type: "input",
    name: "installation",
    message: "What are the installation instructions of your project? Provide a detail step-by-step description" 
 },
 {
    type: "input",
    name: "usage",
    message: "What is the purpose of your project?" 
 },
 {
    type: "list",
    name: "license",
    message: "What type of license would you like to add to your project?",
    choices: [
        "MIT",
        "Apache 2.0",
        "GNU",
        "BSD",
        "Compliant"
    ] 
},
{
    type: "input",
    name: "contributing",
    message: "What guidelines should people follow when contributing to yout project?" 
 },
 {
    type: "input",
    name: "test",
    message: "What test should be ran on your project? Provide detail instructions" 
 },
 {
    type: "input",
    name: "username",
    message: "What is your GitHub username?" 
 },
 {
    type: "input",
    name: "email",
    message: "What is your email?" 
 },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("The README file has been successfully created!")
    });
}

// function to initialize app
const init = () => {
   inquirer.prompt(questions).then(data => {
      writeToFile("README.md", generateMarkdown(data))
      });
}

// Function call to initialize app
init();
