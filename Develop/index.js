
// Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
const writeFile = require('./utils/generateMarkdown.js');
var badge = '';
// Create an array of questions for user input

var questions = readmeData => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email Address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your Email Address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'Enter the Title of the Project (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the title of the Project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'descr',
      message: 'Enter the Description of the Project (Required)',
      validate: descrInput => {
        if (descrInput) {
          return true;
        } else {
          console.log('Please enter the Description of the Project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the Installation Instruction for the Project (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the Installation Instructions for the Project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the Usage Information of the Project (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter the Usage Information of the Project!');
          return false;
        }
      }
    },

    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to enter information about the License for your Application?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a License from the list',
      choices: ['MIT', 'BSD 3','Mozilla', 'Apache 2.0','None'],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the Contributing information for the Project',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter the Tests information for the Project',
    },
  ])
};

questions()
.then(readmeData => {
  if (readmeData.confirmLicense) {
    switch (readmeData.license) {
      case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
         break;
      case 'BSD 3':
        badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;          
      case 'Mozilla':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        break;          
      case 'Apache 2.0':
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;          
      default:
        badge = '';
    };
  };
  readmeData.badge = badge;

  console.log(readmeData);
    return generateReadme(readmeData);
})
.then(pageHTML => {
//  console.log(pageHTML);
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
 console.log(writeFileResponse);
})
.catch(err => {
 console.log(err);
});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
