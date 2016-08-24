'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let words = [];
let normalizedWords = [];
let uniqueWordsAsKeys = {};
let uniqueWords = [];

const normalizeWords = function (string) {
  words = string.split(/\s+/);
  for (let i=0; i<words.length; i++){
    normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (normalizedWords) {
  for (let i=0; i<normalizedWords.length; i++){
    uniqueWordsAsKeys[normalizedWords[i]] = true;
  }

  let count = 0;
  for (let key in uniqueWordsAsKeys){
    uniqueWords[count] = key;
    count ++;
  }
  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string) {
  words = string.split(/\s+/);
  let count = words.length;
  return count;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (normalizedWords) {
  for (let i=0; i<normalizedWords.length; i++){
    uniqueWordsAsKeys[normalizedWords[i]] = true;
  }
  return uniqueWordsAsKeys;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
