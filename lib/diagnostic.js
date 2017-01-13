'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  let normWords = text.split(/\s+/, ' ');
  normWords = normWords.toUpperCase().replace(/\W+/,'');
  return normWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  let uniqueNormWords = [text];
  for (let i = 0; i < normalizeWords.length; i++) {
    uniqueNormWords = uniqueNormWords[i];
  } if (uniqueNormWords === true) {
    return uniqueNormWords;
  }
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (text) {
  let count = [text];
  count = normalizeWords.length;
  let uniqueCount = [text];
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueCount = uniqueNormWords.length;
  }
};

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
