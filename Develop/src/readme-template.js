
module.exports = templateData => {
    
    return `
# ${templateData.title}
${templateData.descr}
## Table of Contents:
* [Installation](#installation)
* [Usage Information](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation
In order to install the necessary modules, run the next commands in the console:
${templateData.installation}
# Usage:
${templateData.usage}
### License:
This project is licensed under:
${templateData.license}
### Contributing:
${templateData.contributing}
### Tests:
In order to test, run the following comand(s) in the console:
${templateData.tests}
### Questions:
If you have any questions contact me at:
[Github](https://github.com/${templateData.github}) or at Email: ${templateData.email}
    `;
  };