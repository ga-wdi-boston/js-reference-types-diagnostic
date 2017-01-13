'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  let words = text.split(' ');
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    normalizedWords[i] = words.toUpperCase().replace(/\W+/, '');
  }
    return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = normalizeWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }

  return Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (text, unique) {
  let getWords = unique ? uniqueWords : normalizeWords;
  let count = getWords(text).length;
  return count;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (text) {
  let u = [];
  let keys = [];
  let k = 0;
  for (keys[k++] in uniqueWordsAsKeys); //jshint ignore:line
  u = keys;
  let freq = {};
  const addOne = function(num) {
    return (num || 0) + 1;
  };
  for (let i = 0; i < normalizeWords.length; i++) {
    let text = normalizeWords[i];
    freq[text] = addOne(freq[text]);
  }
  return freq[text];
};
module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
