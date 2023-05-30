const { generateLogo, renderShape } = require('../lib/GenerateLogo');
const Circle = require('../lib/circle');
const Square = require('../lib/square');
const Triangle = require('../lib/triangle');

test('renderShape returns the correct shape instance for circle', () => {
    const circleShape = renderShape('circle');
    expect(circleShape).toBeInstanceOf(Circle);
  });
  
  test('renderShape returns the correct shape instance for square', () => {
    const squareShape = renderShape('square');
    expect(squareShape).toBeInstanceOf(Square);
  });
  
  test('renderShape returns the correct shape instance for triangle', () => {
    const triangleShape = renderShape('triangle');
    expect(triangleShape).toBeInstanceOf(Triangle);
  });
  
  test('renderShape returns an empty string for unknown shape', () => {
    const unknownShape = renderShape('unknown');
    expect(unknownShape).toBe('');
  });
  