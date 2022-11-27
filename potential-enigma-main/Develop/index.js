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
        name:'usage-information',
        message:'Input the usage information'
    },
    {
        type:'input',
        name:'contribution',
        message:'Input contribuation'
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
        choices:["None","Apache license 2.0","Artistic license 2.0","MIT"]
    },
    {
        type:'input',
        name:'gitHub-username',
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
    
    fs.writeFile('README.md', readmeContent, (err) =>
err ? console.log(err) : console.log('Successfully created README file!')
);
})
// TODO: Create a function to write README file
const generateReadMeContent=reaction=>{
    return `# ${reaction.title}
## Description
${reaction.description}


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${reaction.installation}
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.



## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/badge/license-${reaction.license}-brightgreen)
// creating object,key = license, value= color

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
}


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
