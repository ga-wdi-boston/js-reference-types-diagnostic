'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  return words.replace(/\W+/,'').toUpperCase();
  }
};

let normalizedWords = words.map(normalize);
// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (array) {
  let result = {};
  array.forEach (function (words) {
    result[words] = null;
  });
  return result;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (words, uniqueWords) {
  if (words) {
    return array(words).length;
  } if (uniqueWords) {
    return array(uniqueWords).length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function (words) {
  let uniqueWords = {};
  let normalizeWords = normalizeWords(words);
  for (i = 0; i < normalizedWords.length; i++) {
    let '' = normalizedWords[i];
    uniqueWords[''] = 
  }
  return uniqueWords;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
