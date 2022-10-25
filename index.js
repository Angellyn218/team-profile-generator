const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];

function init() {
    inquirer
        .prompt([{
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
        }, {
            type: "input",
            name: "id",
            message: "What is the Manager's employee id?"
        }, {
            type: "input",
            name: "email",
            message: "What is the Manager's email?"
        }, {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?"
        }])
        .then(answers => {
            team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
            console.log(team);
            chooseNewMember();
        })
}

function chooseNewMember() {
    inquirer
        .prompt([{
            type: "list",
            name: "choice",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "None. I have finished building my team"]
        }])
        .then(answers => {
            if (answers.choice === "Engineer") {
                createEngineer();
            } else if (answers.choice === "Intern") {
                createIntern();
            } else {
                generateHTML();
            }
        })
}

function createEngineer() {
    inquirer
        .prompt([{
            type: "input",
            name: "name",
            message: "What is this Engineer's name?"
        }, {
            type: "input",
            name: "id",
            message: "What is this Engineer's employee id?"
        }, {
            type: "input",
            name: "email",
            message: "What is this Engineer's email?"
        }, {
            type: "input",
            name: "github",
            message: "What is the Engineer's github?"
        }])
        .then(answers => {
            team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            console.log(team);
            chooseNewMember();
        })
}

init()