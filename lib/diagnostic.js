'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let words = paragraph.split(' ');
let arrayWords = [];
const normalizeWords = function (word) {
  return arrayWords = word.replace(/\W+/, '').tpUpperCase();
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (word) {
  let result = [];

   array.forEach(function (word) {
     result[word] = null;
   });

   return result;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
let countTypeSelection;
const wordCount = function (countTypeSelection, word) {
  if (countTypeSelection === 'total'){
      return word.split(' ').length;
    } else {
      let uniqueWords = Object.keys(uniqueWordsAsKeys(normalizedWords)).length;
      return uniqueWords;
    }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
let wordFrequencies = {};
const wordFrequencies = function (word) {
    let uniqueWords = Object.keys(uniqueWordsAsKeys(normalizedWords));
    if (wordFrequencies[word]) {
      wordFrequencies[word] += 1;
      } else {
        wordFrequencies[word] = 1;
      }
      return wordFrequencies;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
