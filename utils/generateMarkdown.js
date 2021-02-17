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
Github profile: https://github.com/${data.username}
email: ${data.email}
`;
}

module.exports = generateMarkdown;
