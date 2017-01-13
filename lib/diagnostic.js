'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function normalizeWords(text) {
    let words = text.split(/\s+/);
    let normalizedWordsArray = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i].replace(/\W+/, '');
      normalizedWordsArray[i] = word.toUpperCase();
    }

    return normalizedWordsArray;
  };

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const uniqueWords = function uniqueWords(text) {
  let uniqueWordsAsKeys = {};
  let normalizedWordsArray = normalizeWords(text);
  for (let i = 0; i < normalizedWordsArray.length; i++) {
    let word = normalizedWordsArray[i];
    uniqueWordsAsKeys[word] = true;
  }

  return Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function wordCount(text, unique) {
  let getWords = unique ? uniqueWords : normalizeWords;
  let count = getWords(text).length;
  return count;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const addOne = function(num) {
  return (num || 0) + 1;
};


const wordFrequencies = function () {
  let wordFrequencies = {};
  for (let i = 0; i < normalizeWords.length; i++) {
    let word = normalizeWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};



module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
