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

init()