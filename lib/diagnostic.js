'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const getNormalizedWords = function getNormalizedWords(text) {
  let words = text.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
onst getUniqueWords = function getUniqueWords(text) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = getNormalizedWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }

  return Object.keys(uniqueWordsAsKeys);
};

// The keys pulled out into a list
let uniqueWords = [];

let keys = [];
let k = 0;
for (keys[k++] in uniqueWordsAsKeys); //jshint ignore:line

uniqueWords = keys;

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function wordCount(text, unique) {
  let getWords = unique ? getUniqueWords : getNormalizedWords;
  let count = getWords(text).length;
  return count;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (text) {
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }};

  let keys = [];
let k = 0;
for (keys[k++] in uniqueWordsAsKeys); //jshint ignore:line

uniqueWords = keys;

let wordFrequencies = {};

for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i];
  wordFrequencies[word] = addOne(wordFrequencies[word]);
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
