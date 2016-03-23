'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let words = string.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizedWords[i] = word.replace(/\W+/,'').toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let normalizedWords = normalizeWords(string);
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  return Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string, unique) {
  let words = normalizeWords(string);
  let uniqueWordList = uniqueWords(string);
  if (unique === true) {
    return uniqueWordList.length;
  } else {
    return words.length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function (string) {
  const addOne = (num) => (num || 0) + 1;
  let words = normalizeWords(string);
  let wordFrequencyList = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    wordFrequencyList[word] = addOne(wordFrequencyList[word]);
  }
  return wordFrequencyList;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
