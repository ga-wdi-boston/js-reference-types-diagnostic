'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function normalizeWords(string) {
  let wordList = string.splits(/\s+/);
  let normalWordList = [];
  for (let i = 0; i < wordList.length; i++) {
    let words = wordList[i];
    normalWordList[i] = words.replace(/\W+/, '').toUpperCase();
  }
  return normalWordList;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function uniqueWords(string) {
  let uniqueWordsList = {};
  let normalWordList = normalWordList(string);
  for (var i = 0; i < normalWordList.length; i++) {
    let words = normalWordList[i];
    uniqueWordsList[words] = true;
  }
  return uniqueWordsList;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(string) {
  let count = normalizeWords(string);
  let uniqueWordsList = Object.key()
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function () {

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
