'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalWords = [];
let words = normalWords.split(' ');
const normalizeWords = function (/* */) {
return words.toUpperCase().replace(/\W+/, '');
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let uniqueWordsAsKeys = {};
const uniqueWords = function (/* */) {
  for (let i = 0; i < normalWords.length; i++){
    let word = normalWords[i];
    uniqueWordsAsKeys[word]=true;
  }
};
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.
let uniqueWords = [];
let k = 0
for (keys[k++] in uniqueWordsAsKeys);
let wordFrequencies = [];
const wordCount = function (/* */) {
  return (num || 0) + 1;
};
// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  for (let i = 0; i < normalWords.length; i++) {
    let word = normalWords[i];
    wordFrequencies[word] = wordCount(wordFrequencies[word]);
  };
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
