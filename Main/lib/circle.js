const {Shapes} = require('./shapes')

class Circle extends Shapes {
    constructor(shape,shapeText) {
      super(shape, shapeText) 
      this.shape = shape;
      this.shapeText = shapeText;
    }    
}

module.exports = Circle;