//import packages
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page.template")

//import classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


//empty array to store employee data in
const Employees = [];


//collects manager information
const teamBuilder = () => {
    return inquirer
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
            Employees.push(new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber));
            newTeamMemberPrompt();
        });
};


newTeamMemberPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "Who would you like to add?",
                choices: ["Engineer", "Intern", "I am finished building my team."],
            }]).then(userChoice => {
                switch (userChoice.role) {
                    case "Engineer":
                        addEngineer().then(answers => {
                            Employees.push(new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub));
                            newTeamMemberPrompt();
                        })
                        break;
                    case "Intern":
                        addIntern().then(answers => {
                            Employees.push(new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool));
                            newTeamMemberPrompt();
                        })
                        break;
                    default:
                        fs.writeFileSync("./dist/Team.html", generatePage(Employees));
                };
            })
};


function addEngineer() {
    return inquirer
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
        ])
}

function addIntern() {
    return inquirer
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
        ])
}


function init() {
    console.log("Please build your team!");
    teamBuilder();
}

//   Function call to initialize app
init();