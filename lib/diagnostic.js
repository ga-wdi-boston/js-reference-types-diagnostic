'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(' ');
  let normalizedWords = words.map((word) => {
    return word.toUpperCase().replace(/\W+/, '');
  });
    return normalizedWords;
  };
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (uniqueWordsAsKeys) {
  let uniqueWords = [];
  let keys = [];
  let k = 0;
  for (keys[k++] in uniqueWordsAsKeys);
  uniqueWords = keys;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (arg1, arg2) {
  let wordFrequencies = {};

  const addOne = function (num) {
    return (num || 0) + 1;
  };

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function () {
  let wordFrequencies = {};

  const addOne = function (num) {
    return (num || 0) + 1;
  };

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
