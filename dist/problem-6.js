"use strict";
{
    const myProfile = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com',
    };
    const updateProfile = (profile, update) => {
        return Object.assign(Object.assign({}, profile), update);
    };
}
