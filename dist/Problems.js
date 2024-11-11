"use strict";
{
    {
        /*
          
          Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
          
          // Sample Input:
          sumArray([1, 2, 3, 4, 5]);
          
          // Sample Output:
          15;
          
          */
        const sumArray = (numbers) => {
            const result = numbers.reduce((acc, number) => acc + number, 0);
            return [result];
        };
        console.log(sumArray([1, 2, 3, 4, 5]));
        const person = { name: 'Alice', age: 30 };
        const getProperty = (user, key) => {
            return user[key];
        };
        console.log(getProperty(person, 'name'));
    }
}
