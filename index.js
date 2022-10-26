const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/template');
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
                writeToFile('./dist/team.html');
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
            message: "What is this Engineer's github?"
        }])
        .then(answers => {
            team.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            chooseNewMember();
        })
}

function createIntern() {
    inquirer
        .prompt([{
            type: "input",
            name: "name",
            message: "What is this Intern's name?"
        }, {
            type: "input",
            name: "id",
            message: "What is this Intern's employee id?"
        }, {
            type: "input",
            name: "email",
            message: "What is this Intern's email?"
        }, {
            type: "input",
            name: "school",
            message: "What is this Intern's school name?"
        }])
        .then(answers => {
            team.push(new Intern(answers.name, answers.id, answers.email, answers.school));
            chooseNewMember();
        })
}

function writeToFile(fileName) {
    const teamStr = generateHTML(team);
    fs.writeFile(fileName, teamStr, (err) =>
        err ? console.log(err) : console.log("Successfully created HTML! (See 'team.html' file in the 'dist' folder for result)"));
}

init()