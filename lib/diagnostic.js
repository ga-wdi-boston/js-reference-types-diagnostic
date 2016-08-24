'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (word) {

  word.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < word.length; i++) {
    normalizedWords[i] = word[i].replace(/\W+/, '').toUpperCase();
  }

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (word) {

  let uniqueWords = [];
  let count = 0;

  for (let key in word){
    uniqueWords[count] = key;
    count++;
  }

  uniqueWords.split(/\s+/);
  let uniqueNormalizedWords = [];
  for (let i = 0; i < uniqueWords.length; i++) {
    uniqueNormalizedWords[i] = uniqueWords[i].replace(/\W+/, '').toUpperCase();

  return uniqueNormalizedWords;
  }
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (word) {

};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (word) {
  let wordFrequencies = {};

  for (let i = 0; i < word.length; i++) {
    if(word[i] === undefined){
      wordFrequencies[i] = 1;
    }
    else {
      wordFrequencies[word[i]] += 1;
    }
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
