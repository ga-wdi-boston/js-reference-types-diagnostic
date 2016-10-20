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
  normalizeWords[i] = word.toUpperCase();
}
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (normalizedWords) {
  let uniqueWordsAsKeys = {};
for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i];
  uniqueWordsAsKeys[word] = true;
}
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (str) {
  return str.split(" ").length;
};
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (str) {
  let uniqueWords = [];

let keys = [];
let k = 0;

for(keys[k++] in uniqueWordsAsKeys);

uniqueWords = keys;
let wordFrequencies = {};

const addOne = function(num) {
  return (num || 0) +1;
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
