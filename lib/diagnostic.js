'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

let normalizedWords = [];

const getNormalizedWords = function getNormalizedWords() {
  for (let i = 0; i < arguments.length; i++){
  normalizedWords[i] = arguments[i];
  normalizedWords[i] = normalizedWords[i].replace(/\W+/, '').toUpperCase();
  }
};

getNormalizedWords('hello', 'world', 'hows', 'it', 'going');

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let uniqueWords = [];

const getUniqueWords = function getUniqueWords() {
  for (let i = 0; i < normalizedWords.length; i++){
    uniqueWords[i] = normalizedWords[i];
  }
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.

const wordCount = function() {
  return arguments.lenth;
};


// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key

let uniqueWordsAsKeys = {};

const wordFrequencies = function() {
  for (let i = 0; i < arguments.length; i++) {
    
  }
};

module.exports = {
  normalizedWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
