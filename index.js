const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const output = [];
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the office number?",
    }
]

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?"
    },
    {
        type: 'list',
        name: 'type',
        message: "What type of employee?",
        choices: ["Engineer", "Intern"],
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github name?",
        when: (answers) => answers.type === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        when: (answers) => answers.type === 'Intern' //Repeat this for engineer and intern
    },
]

const continuationQuestions = [
    {
        type: 'list',
        name: 'option',
        message: "Add another employee or generate the team profile?", //asks whether everything is ready to put together
        choices: ["Add another employee", "Generate the team profile"] //use fs to generate profile if generating
    },
]

function runApp() {
    inquirer.prompt(questions)
        .then(answers => { //.then waits for your info (promise)
            console.log(answers)
            continuation()
        })
}

function askQuestions() {
    inquirer.prompt(employeeQuestions)
        .then(answers => {
            console.log(answers)
            continuation()
        })
}

function continuation() {
    inquirer.prompt(continuationQuestions)
        .then(answers => { //.then waits for your info (promise)
            console.log(answers)
            //if chosen add enother employee, execute askQuestions
        })
}

runApp() //execution of the function, or calling