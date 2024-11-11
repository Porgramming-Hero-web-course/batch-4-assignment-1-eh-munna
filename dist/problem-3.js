"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        sentence = sentence.toLowerCase();
        word = word.toLowerCase();
        let count = [];
        const words = sentence.split(' ');
        for (let i = 0; i < words.length; i++) {
            if (words[i] === word) {
                count.push(word);
            }
        }
        return count.length;
    };
}
