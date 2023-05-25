class Circle extends Shapes {
    constructor(shape,color,backgroundColor) {
      super(shape) 
      this.shape = shape;
      this.shapeText = [];
    }
    render() { 
      this.shapeText.push('circle cx="150" cy="100" r="80"');
    }
}

module.exports = Circle;