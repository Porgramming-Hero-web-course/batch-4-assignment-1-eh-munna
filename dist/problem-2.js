"use strict";
{
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const removeDuplicates = (data) => {
        return data.filter((value, index) => data.indexOf(value) === index);
    };
}
