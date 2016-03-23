'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function getNormalizedWords(text) {
  let normalizeWords = [];
  let words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizeWords[i] = word.replace(/\W+/, '').toUpperCase();
  }
  return normalizeWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function getUniqueWords(text) {
  let normalizeWords = getNormalizedWords(text);
  let uniqueWords = {};
  for (let i = 0; i < normalizeWords.length; i++) {
    let word = normalizeWords[i];
    uniqueWordsAsKeys[word] = true;
  }
let uniqueWords = Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(count, uniqueOption) {
  if (uniqueOption === true){
    return getUniqueWords(count).length;
  }
  else {
    return getNormalizedWords(count).length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function getWordFrequencies(text) {
  let uniqueWords = getUniqueWords(text);
  let wordFrequencies = {};
  for (let i = 0; i < uniqueWords.length; i++) {
    word = uniqueWords[i];
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
