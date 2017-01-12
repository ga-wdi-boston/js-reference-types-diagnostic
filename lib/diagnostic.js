'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function normalizeWords(text) {
  let words = text.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function uniqueWords(text) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = normalizeWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  };
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function wordCount(text, unique) {
  if (unique === false) {
    console.log(normalizedWords.length);
  } else if (unique === true) {
    console.log(uniqueWords.length);
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const addOne = function(num) {
  return (num || 0) +1;
}

const wordFrequencies = function (text) {
  for (i = 0; i < normalizedWords.length; i++) {

  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
