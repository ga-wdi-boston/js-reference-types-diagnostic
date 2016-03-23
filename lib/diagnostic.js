'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let normalizedWords = [];
  let words = string.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizedWords[i] = word.replace(/\W+/, '').toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = normalizeWords(string);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  let uniquedWords = Object.keys(uniqueWordsAsKeys);
  return uniquedWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string, unique) {
  if(unique === true) {
    let uniquedWords = uniqueWords(string);
    return uniquedWords.length;
  } else {
      let normalizedWords = normalizeWords(string);
      return normalizedWords.length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (string) {
  const addOne = (num) => (num || 0) + 1;
  let wordFrequencies = {};
  let uniquedWords = uniqueWords(string);
  for (let i = 0; i < uniquedWords.length; i++) {
    let word = uniquedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
