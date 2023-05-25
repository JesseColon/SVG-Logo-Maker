const Shapes = require('./shapes');
const Circle = require('./circle')
const Square = require('./square')
const Triangle = require('./triangle')

function renderShape(shape) {
  switch (shape) {
    case 'circle':
      return 'circle cx="150" cy="100" r="80"';
    case 'square':
      return 'rect x="100" y="65" width="100" height="100"';
    case 'triangle':
      return triangle = new Triangle(
        'triangle',
        '${answer.color}'
      );
    default:
      return '';     
  };
}

// creating function that takes in user inputs and creates a logo
function generateLogo({text, color, shape, backgroundColor}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <${renderShape(shape)} fill="${backgroundColor}"/>

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>

</svg> `;
}

module.exports = generateLogo;