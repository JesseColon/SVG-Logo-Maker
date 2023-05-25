const Circle = require('./circle')
const Square = require('./square')
const Triangle = require('./triangle')

class Shapes {
    constructor(shape,color,backgroundColor,) {
        this.shape = shape;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.shapeText = [];
    }
}

module.exports = Shapes;