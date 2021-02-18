const inquirer = require("inquirer");
const fs = require("fs");
const generater = require("./utils/generateMarkdown.js");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the description of the project?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Who Contributed to the project",
      name: "contribute",
    },
    {
      type: "input",
      message: "Enter your github username",
      name: "username",
    },
    {
      type: "input",
      message: "Enter your email",
      name: "email",
    },
  ])
  .then((response) => {
    console.log(response);
    console.log(generater(response));
    fs.writeFileSync("README.md", generater(response));
  });
