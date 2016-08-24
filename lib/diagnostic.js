'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (normalizedWords) {
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (normalizedWords) {
  for (let i = 0; i < normalizedWords.length; i++) {
    wordCount[i] +=;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (normalizedWords) {
  let word = 0;
  for (let i = 0; i < normalizedWords.length; i++) {
    word = normalizedWords[i];
    wordFrequencies[word] +=;
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
