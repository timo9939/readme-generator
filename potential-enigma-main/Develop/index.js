// TODO: Include packages needed for this application
const inquirer=require('inquirer');
const fs =require('fs')
// TODO: Create an array of questions for user input
//const questions = [];

//const generateHTML=({title})

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
        choices:["None","Apache license 2.0","Artistic license 2.0"]
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
// .then ((reaction)=>{
//     const readmeContent= generateHTML(reaction);
// })
// // TODO: Create a function to write README file
// fs.writeFile(readme.md, readmeContent, (err) =>
// err ? console.log(err) : console.log('Successfully created README file!')
// );


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
