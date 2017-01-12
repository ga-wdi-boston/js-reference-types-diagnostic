'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(/\s+/);

  // The word list normalized (all uppercase with punctuation removed)
  let normalizedWords = words.map((word) => {
    return word.toUpperCase().replace(/\W+/, '');
  });

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  // The words stored as keys of a dictionary
  const normalizedWords = normalizeWords(paragraph);
  let uniqueWordsAsKeys = {};

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }

  // The keys pulled out into a list
  let uniqueWords = [];

  let keys = [];
  let k = 0;
  for (keys[k++] in uniqueWordsAsKeys) //jshint ignore:line

  uniqueWords = keys;

  return uniqueWords;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (paragraph, unique) {
  const normalizedWords = normalizeWords(paragraph);
    // The words as keys and the values the count of each word
    const uniqueArray = uniqueWords(paragraph);

    if (unique) {
      return uniqueArray.length;
    } else {
      return normalizedWords.length;
    }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (paragraph) {
  let wordFrequencies = {};
  const normalizedWords = normalizeWords(paragraph);

  const addOne = function (num) {
    return (num || 0) + 1;
  };

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }

  return wordFrequencies;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
