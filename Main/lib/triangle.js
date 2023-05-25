class Triangle extends Shapes {
    constructor(shape,color,backgroundColor) {
      super(shape,color,backgroundColor)
      this.shape = shape;
      this.color = color;
      this.backgroundColor = backgroundColor;
      this.shapeText = [];
    }
    render() {
      this.shapeText.push('polygon points="140,10 400,400 10,300"');
    }
}

module.exports = Triangle;