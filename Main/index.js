const inquirer = require('inquirer');


const { writeFile } = require('fs').promises;
// TODO: Create an array of questions f.or user input
const userPrompt = () =>{
  return  inquirer.prompt([
      {
          type: 'input',
          name: 'text',
          message: 'enter 3 letters for your',
        },
        {
          type: 'list',
          name: 'color',
          message: 'choose a color' ,
          choices: ['blue, green, red, yellow, purple, orange']
        },
        {
          type: 'list',
          name: 'shape',
          message: 'pick a shape',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'list',
          name: 'shapeColor',
          message: 'pick the shapes color',
          choices: ['blue, green, red, yellow, purple, orange']
        },
    
       
    ])
};