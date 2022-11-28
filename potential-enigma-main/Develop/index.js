// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs =require('fs')
// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
        type:"input",
        name:"title",
        message: 'What is the title of the project ?'
    },
    {
     type:'input',
     name:'description',
     message:'Input description'   
    },
    {
        type:'input',
        name:'installation',
        message:'Input the installation instruction'
    },
    {
        type:'input',
        name:'usage',
        message:'Input the usage information'
    },
    {
        type:'input',
        name:'credit',
        message:'Input any credit'
    },
    {
        type:'input',
        name:'Test',
        message:'Input test'
    },
    {
        type:'list',
        name:'license',
        message:'Input the license',
        choices:["None","Apache--license--2.0","Artistic--license--2.0","MIT"]
    },
    {
        type:'input',
        name:'feature',
        message:'Input the features of your apps'
    },
    {
        type:'input',
        name:'gitHubUsername',
        message:'Input your GitHub username'
    },
    {
        type:'input',
        name:'email',
        message:'Input your email address'
    }
])
.then ((reaction)=>{
    const readmeContent= generateReadMeContent(reaction)
    
    fs.writeFile('README-example.md', readmeContent, (err) =>
err ? console.log(err) : console.log('Successfully created README file!')
);
})
// TODO: Create a function to write README file
const generateReadMeContent=reaction=>{
    return `# ${reaction.title}
![badmath](https://img.shields.io/badge/license-${reaction.license}-brightgreen)

## Description
${reaction.description}
[badge](https://img.shields.io/badge/license-${reaction.license}-brightgreen)

## Table of Contents 
 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [GitHub](#github)
- [Email](#email)

## Installation
${reaction.installation}

## Usage
${reaction.usage}

## Credits
${reaction.credit}

## Test
${reaction.Test}

## License & Badges
${reaction.license}


## Features
${reaction.feature}

## GitHub
https://github.com/${reaction.gitHubUsername}

## Email
${reaction.email}
`

}



// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
