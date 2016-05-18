'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let normalizedWords;
const normalizeWords = function (string) {
  let words = string.split(' ');
  const normalize = function (word) {
  return word.replace(/\W+/, '').toUpperCase();
};
normalizedWords = words.map(normalize);
return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let uniqueWordsAsKeys = function(array) {
  let result = {};
  array.forEach(function (word) {
    result[word] = 0;
  });
  return result;
};
const uniqueWords = function (string) {
  let uniqueWords = Object.keys(uniqueWordsAsKeys(normalizeWords(string)));
  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string) {
  let wordFrequencies = {};
  normalizeWords(string).forEach(function (word){
    if (wordFrequencies[word]) {
      wordFrequencies +=1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (string) {
  let wordFrequencies = {};
  normalizeWords(string).forEach(function (word){
    if (wordFrequencies[word]) {
      wordFrequencies +=1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
