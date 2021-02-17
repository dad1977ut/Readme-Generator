// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Installation
${data.installation}
## Contributors
${data.contribute}
## Questions
https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
