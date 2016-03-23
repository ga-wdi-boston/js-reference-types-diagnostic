'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  let words = text.split(/\s+/);
  let normalizeWord = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizeWord = word.replace(/W+/,'').toUpperCase();
  }

  return normalizeWord;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  let words = normalizeWords(text);
  let uniqueWordKeys = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    uniqueWordKeys[word] = true;
  }

    let uniqueWord = Object.keys(uniqueWordKeys);

  return uniqueWord;

};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (inputText, inputOption) {
  if(inputOption === true) {
    return uniqueWords(inputText).length;
  }

  else {
    return normalizeWords(inputText).length;

  }

};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (text) {



};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
