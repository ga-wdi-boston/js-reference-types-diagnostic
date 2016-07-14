'use strict';

// Reuse functions wherever possible.
const paragraph = 'This is a string';
// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let words = paragraph.split(/\s+/);

const normalizeWords = function (/* */) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizedWords[i] = word.replace(/\W+/, '').toUpperCase();
  }
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const addOne = function (num) {
  if (num) {
    return num + 1;
  } else {
    return 1;
  }
};


 let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = addOne(uniqueWordsAsKeys[word]);
  }

const uniqueWords = Object.keys(uniqueWordsAsKeys);



// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (/* */) {
  /* your response here */
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
