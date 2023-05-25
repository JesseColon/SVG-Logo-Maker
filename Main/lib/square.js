class Square extends Shapes {
    constructor(shape,color,backgroundColor) {
      super(shape,color,backgroundColor) 
      this.shape = shape;
      this.color = color;
      this.backgroundColor = backgroundColor;
      this.shapeText = [];
    }
    render() {
        this.shapeText.push('rect x="100" y="65" width="100" height="100"');
    }
}

module.exports = Square;