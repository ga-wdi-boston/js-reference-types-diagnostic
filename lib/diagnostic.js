'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (splitWords) {
  let normalizeWords =[];
  let words = normalizeWords.split(/\s+/);
    for (let i = 0; i < splitWords.length; i++) {
      splitWords[i] = words.toUpperCase();
      return normalizeWords;
    }
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
c
onst uniqueWords = function () {
  let uniqueWords = {};
    for (let i = 0; i < normalizeWords.length; i++) {
      let words = normalizeWords[i];
      uniqueWords[word] = true;
    }

};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  let wordCount = [];

  let keys = [];
  let k = 0;

  for(keys[k++] in uniqueWordsAsKeys);

  uniqueWords = keys;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (freq) {
  let wordFrequencies = {};

  const addOne = function(num){
    return (num || 0) +1;
  };

    for (let i = 0; i < normalizeWords.length; i++) {
        let word = normalizeWords[i];
        freq[word] = addOne(freq[word]);
    }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
