{
  const person = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com',
  };

  const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
    if (keys.length === 0) return false;
    return keys.every((key) => key in obj);
  };
}
