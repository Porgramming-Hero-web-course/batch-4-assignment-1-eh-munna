"use strict";
{
    const circle = {
        shape: 'circle',
        radius: 5,
    };
    const rectangle = {
        shape: 'rectangle',
        width: 4,
        height: 6,
    };
    const calculateShapeArea = (shape) => {
        if (shape.shape === 'circle') {
            return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
        }
        else if (shape.shape === 'rectangle') {
            return parseFloat((shape.width * shape.height).toFixed(2));
        }
    };
}
