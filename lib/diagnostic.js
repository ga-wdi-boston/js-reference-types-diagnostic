'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (wordString, space) {
  let arrayOfString = wordString.split(space);
  console.log(arrayOfString);
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (wordString, ) {
  /* your response here */
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const normalizeWords = function (wordString, space) {
  let arrayOfString = wordString.split(space);
  console.log(arrayOfString);

let wordCount = function (arrayOfString) {
  let length = arrayOfString.length;
  console.log(length);
};};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
