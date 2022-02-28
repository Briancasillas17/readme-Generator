const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// prompts users to answer questions about readme content
function init() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your user GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is URL of your project in GitHub?",
            name: "url"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What packages need to be installed to run your project.",
            name: "installation"
        },
        {
            type: "input",
            message: "What technologies were used to create your project.",
            name: "technology"
        },
        {
            type: "input",
            message: "Please provide an example of how your project can be used.",
            name: "usage"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license would you like to have?",
            name: "license",
            choices: ["MIT", "ISC", "Perl"]
        },
        {
            type: "input",
            message: "Including yourself, please list out all contribution",
            name: "Contribution"
        },
        {
            type: "input",
            message: "What command is used to run a test",
            name: "tests",
        }
    ]);
}
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "README created! Check 'readme' folder."
            })
        })
    });
}
init()
.then(data => {
    console.log("README created! Check 'readme' folder");
    return writeToFile("./readme/README.md", generateMarkdown({...data}))
})