const inquirer = require('inquirer');
const {generateLogo, renderShape} = require('./lib/GenerateLogo');
const Shapes = require('./lib/shapes')

const { writeFile } = require('fs').promises;

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
          choices: ['blue', 'green', 'red', 'yellow', 'purple', 'black', 'white']
        },
        {
          type: 'list',
          name: 'shape',
          message: 'pick a shape',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'list',
          name: 'backgroundColor',
          message: 'pick the shapes color',
          choices: ['blue', 'green', 'red', 'yellow', 'purple', 'black','white']
        },
    
       
    ])
};

const init = () => {
    userPrompt()
    .then((answers) => 
    {const shape = renderShape(answers.shape);
       writeFile('logo.svg', generateLogo({...answers,shape:shape}))})
    .then(() => console.log('Generated logo.svg'))
    .catch((err) => console.error(err));
};

init();
