'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function () {
  animals : 'Cat', 'Dog', 'Bird';
  return normalize.[animals];
};
console.log(normalizeWords(/\w\S*/));

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  animals : 'Cat', 'Dog', 'Bird';
  return normalize.[animals];
};

console.log(uniqueWords( ? ));

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

///// I GOT THIS FROM STACKOVERFLOW AND HONESTLY HAVE NO IDEA ////

var words = [];
var counts = [];

calculate(['a', 'b']);
calculate(['a', 'c']);
calculate(['a', 'b', 'c']);

const wordCount = function (/* */) {
  /* your response here */
};

function wordCount(inputs) {
    for (var i = 0; i < inputs.length; i++) {
    var isExist = false;
    for (var j = 0; j < words.length; j++) {
        if (inputs[i] == words[j]) {
            isExist = true
            counts[i] = counts[i] + 1;
        }
    }
    if (!isExist) {
        words.push(inputs[i]);
        counts.push(1);
    }
    isExist = false;
}
}

console.log(words);
console.log(counts);

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

NOPE  : (



module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
