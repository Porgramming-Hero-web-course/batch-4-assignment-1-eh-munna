<h3> The significance of union and intersection types in Typescript</h3>

- Union and intersection types are very useful as well as powerful features provided by TypeScript. These types enable developers to model complex type and create more flexible type.

- Significance of union types

1. We can create multiple types into a single type using _*union type*_

   - For example, number | string represents a type that can be either a number or a string.

```js
type NumOrString = number | string;

const numVar: NumOrString = 123;
const strVar: NumOrString = 'hello';
```

- The type declared for above example can be used to the variables to store or number type data

2. Union types are also useful when developer needs to deal with a functions which can accept or return different types of data.

   - For example, the following function can receives a number or string as argument and returns them wether they are a number or string based on the type.

```js
const showOutput = (params: string | number): string | number => {
  console.log(params);
};
```

- Significance of intersection types

1. Typescript's intersection types allows developer to combine multiple types into a single type with all the properties and methods of each marge type.

   - For example, this following type will have all the properties of two different type and act as one single type

   ```js
   type PlayerName = {
     name: string,
   };

   type PlayerAge = {
     age: number,
   };
   type Player = PlayerName & PlayerAge;
   ```

2. Intersection types provide type safety for a variable or a function that has all the expected properties from the combined types. It leads to fewer runtime errors.

   - For example, this following combined type will be used as type safety for the object, and this object will give error if it doesn't have all the properties from that basic two different types.

```js
type PlayerName = {
  name: string,
};

type PlayerAge = {
  age: number,
};
type Player = PlayerName & PlayerAge;

const player: Player = {
  name: 'John',
  age: 10,
};
```
