{
  type Person = {
    name: string;
    age: number;
  };

  const person = { name: 'Alice', age: 30 };

  const getProperty = <O, K extends keyof O>(user: O, key: K) => {
    return user[key];
  };
}
