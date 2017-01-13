'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function normalizeWords(paragraph) {
  let words = paragraph.split(/\s+/);
  let normalizeWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizeWords[i] = word.toUpperCase();
  }

  return normalizeWords;
};

console.log(normalizeWords('hjgj h jhg '));

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const uniqueWords = function uniqueWords(paragraph) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = normalizeWords(paragraph);
  for (let i = 0; i < normalizeWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }

  return Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function wordCount(paragraph, unique) {
  let getWords = unique ? uniqueWords : normalizeWords;
  let count = getWords(paragraph).length;
  return count;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
let wordFrequencies = {};

const addOne = function (num) {
  return (num || 0) + 1;
};

for (let i = 0; i < normalizeWords.length; i++) {
  let word = normalizeWords[i];
  wordFrequencies [word] = addOne(wordFrequencies [word]);
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
