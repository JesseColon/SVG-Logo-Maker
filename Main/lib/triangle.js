const {Shapes} = require('./shapes')

class Triangle extends Shapes {
    constructor(shape, shapeText) {
      super(shape, shapeText)
      this.shape = shape;
      this.shapeText = shapeText;
    }
}

module.exports = Triangle;