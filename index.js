const inquirer = require("inquirer");
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
      message: "Who Contribute to the project",
      name: "contribute",
    },
  ])
  .then((response) => {
    console.log(response);
    console.log(generater(response));
  });
