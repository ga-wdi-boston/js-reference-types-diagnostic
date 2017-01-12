'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let words = string.split(' ');
  for (let i = 0; i < string.length; i++) {
    return words.toUpperCase().replace(/\W+/, '');
  }
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function(normalizedWords) {
  let uniqueWordsAsKeys = {};
  for(let i = 0; i < normalizedWords.length; i++) {
    let word = normalizeWords[i];
    uniqueWordsAsKeys[word] = true;
  }
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function () {
  let unique = [];
  let keys = [];
  let k = 0;
  for(keys[k++] in uniqueWordsAsKeys); //jshint ignore:line
  unique = keys;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
let frequencies = {};
const addNum = function (num) {
  return (num || 0) + 1;
}
const wordFrequencies = function () {
  for (let i = 0; i < normalizeWords.length; i++) {
let word = normalizeWords[i];
  }
  frequencies[word] = addNum(frequencies[word]);
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
