const fs = require('fs');
var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Hello there! What is the title of your project?',
        name: 'title', 
    },
    {
        type: 'input',
        message: 'What would you like your description to be?',
        name: 'description', 
    },
    {
        type: 'input',
        message: 'What are the installation steps?',
        name: 'installation', 
    },
    {
        type: 'input',
        message: 'What would you like the usage guide to be?',
        name: 'usage', 
    },
    {
        type: 'list',
        message: 'Please select a licensing option, MIT is pretty good!',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        message: 'Any contributers for this project?',
        name: 'contributers', 
    },
    {
        type: 'input',
        message: 'Any test instructions youd like to provide?',
        name: 'test', 
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username', 
    },
    {
        type: 'input',
        message: 'What is a good email to contact you with for questions?',
        name: 'email', 
    },


  ])
  .then((answers) => {
    console.log('you got it, baby!')

    const content = 

`## ${answers.title}

## Description 

${answers.description}

${answers.license}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contributers}

## Tests 

${answers.test}

## License

${answers.license}

## Questions

${answers.username}

${answers.email}`

    fs.writeFile('readme.md', content, err=>{
        if(err){
            throw err
        }
    })

  })
