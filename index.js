//import packages
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page.template")

//import classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const newManagerPrompt = () => {
inquirer
    .prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please enter your name",
        },
        {
        type: "input",
        name: "managerId",
        message: "Please enter your ID number",
        },
        {
        type: "input",
        name: "managerEmail",
        message: "Please enter your email",
        },
        {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please enter your office number",
        },
    ]).then((answers) => {
        newTeamMemberPrompt();
        });
    };

newTeamMemberPrompt = () => {
inquirer
    .prompt([
    {
        type: "list",
        name: "role",
        message: "Who would you like to add?",
        choices: ["Engineer", "Intern"],
    }]).then(userChoice => {
        switch (userChoice.role) {
            case"Engineer":
            addEngineer();
            break;
            case"Intern":
            addIntern();
            break;
            default:
        };
    })
};


    function addEngineer () {
        inquirer
            .prompt([
                {
                type: "input",
                name: "engineerName",
                message: "Please enter your name",
                },
                {
                type: "input",
                name: "engineerId",
                message: "Please enter your ID number",
                },
                {
                type: "input",
                name: "engineerEmail",
                message: "Please enter your email",
                },
                {
                type: "input",
                name: "engineerGithub",
                message: "Please enter github username",
                }
            ])}

    function addIntern () {
        inquirer
            .prompt([
                {
                type: "input",
                name: "internName",
                message: "Please enter your name",
                },
                {
                type: "input",
                name: "internId",
                message: "Please enter your ID number",
                },
                {
                type: "input",
                name: "internEmail",
                message: "Please enter your email",
                },
                {
                type: "input",
                name: "internSchool",
                message: "Please enter your school",
                }
            ])}


          function init() {
            console.log("Please build your team!");
            newManagerPrompt();
          }
          
        //   Function call to initialize app
          init();