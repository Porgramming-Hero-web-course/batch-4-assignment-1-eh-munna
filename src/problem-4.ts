{
  /* 
    
    Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.


    
    */

  type Circle = {
    shape: 'circle';
    radius: number;
  };

  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  type ExpectedShape = Circle | Rectangle;

  const circle: Circle = {
    shape: 'circle',
    radius: 5,
  };

  const rectangle: Rectangle = {
    shape: 'rectangle',
    width: 4,
    height: 6,
  };

  const calculateShapeArea = (shape: ExpectedShape) => {
    if (shape.shape === 'circle') {
      return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    } else if (shape.shape === 'rectangle') {
      return parseFloat((shape.width * shape.height).toFixed(2));
    }
  };
}
