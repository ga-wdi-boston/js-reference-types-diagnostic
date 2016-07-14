'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const normalizeWords = function (words) {
  let words = paragraph.split(/\s+/);
  let normalizeTheWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizeTheWords[i] = word.replace(/\W+/, '').toUpperCase();
    return normalizeTheWords;
  }
  }

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const addOne = function(num) {
  if (num) {
    return num + 1;
  } else {
    return 1;
  }
};
const uniqueWords = function (normalizeTheWords) {
  let uniqueWordsAsKeys = {};
    for (let i = 0; i < normalizeTheWords.length; i++) {
      let word = normalizeTheWords[i];
      uniqueWordsAsKeys[word] = addOne(uniqueWordsAsKeys[word]);
    }
    let uniqueWords = Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (uniqueWords) {
  let wordFrequencies = uniqueWordsAsKeys;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
