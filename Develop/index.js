
// Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
const writeFile = require('./utils/generateMarkdown.js');

// Create an array of questions for user input

const questions = () => {
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
      choices: ['MIT', 'BSD','GPL','Other'],
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
    }

  ]);
};

/*

/*
promptUser()
  .then(promptProject)
  .then(readmeData => {
    const pageHTML = generatePage(readmeData);
    fs.writeFile('./dist/index.html', pageHTML, err => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Page created! Check out index.html in this directory to see it!');
    
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Style sheet copied successfully!');
      });
    });
  });
*/

questions()
.then(questions => {
    return generateReadme(questions);
})
.then(pageHTML => {
  console.log(pageHTML);
  return writeFile(pageHTML);
})
/*  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  })*/
  ;



  // TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
