'use strict';

// Reuse functions wherever possible.
const addOne = (num) => (num || 0) + 1;

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function(inputString) {
  let wordList = inputString.split(/\s+/);
  for (let i = 0; i < wordList.length; i++) {
    wordList[i] = wordList[i].replace(/\W+/, '').toUpperCase();
  }
  return wordList;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function(inputText) {
  let normalizedWords = normalizeWords(inputText);
  let filterDictionary = {};
  let uniqueWords = [];
  for (let i = 0; i < normalizedWords.length; i++) {
    filterDictionary[normalizedWords[i]] = true;
  }
  uniqueWords = Object.keys(filterDictionary);
  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(inputText, unique) {
  if (unique) {
    let uniqueLength = uniqueWords(inputText);
    return uniqueLength.length;
  } else {
    let listLength = normalizeWords(inputText);
    return listLength.length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function(inputText) {
  let normalizedWords = normalizeWords(inputText);
  let wordFrequencies = {};
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
