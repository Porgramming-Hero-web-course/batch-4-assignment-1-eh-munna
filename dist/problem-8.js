"use strict";
{
    const person = {
        name: 'Alice',
        age: 30,
        email: 'alice@example.com',
    };
    const validateKeys = (obj, keys) => {
        if (keys.length === 0)
            return false;
        return keys.every((key) => key in obj);
    };
}
