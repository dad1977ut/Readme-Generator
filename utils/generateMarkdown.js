// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Contributors](#contributors)
  4. [Tests](#tests)
  5. [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Contributors
${data.contribute}
## Tests
## Questions
Github profile: https://github.com/${data.username}
email: ${data.email}
`;
}

module.exports = generateMarkdown;
