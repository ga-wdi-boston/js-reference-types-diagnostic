'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

//let words = [];
// = paragraph.split (/\s+/);
//console.log('words is ', words);

let paragraph = 'When in the Course of human events,'

const normalizeWords = function () {
  for (let i = 0; i < paragraph.length; i++) {
  normalizeWords[i] = paragraph.split (/\s+/);
  paragraph.replace(/\W+/, '');
  paragraph.toUpperCase ();
}
console.log('normalizeWords is now', normalizeWords);
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  /* your response here */
};

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
