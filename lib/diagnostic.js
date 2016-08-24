'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {
  let words = str.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
  }

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let normalizedWords = normalizeWords(str);
  let uniqueWordList = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWordList[normalizedWords[i]] = true;
  }

  return Object.keys(uniqueWordList);
};

// 3. Write a function that returns the count of words in a string.
// Provide the *option* to count unique words instead of total words.
const wordCount = function (str, opt) {
  let count = 0;
  if (opt === 'total') {
    let normalizedWords = normalizeWords(str);
    count = normalizedWords.length;
  } else if (opt === 'unique') {
    let uniqueWordList = uniqueWords(str);
    count = uniqueWordList.length;
  }
  return count;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key

const wordFrequencies = function (str) {
  let normalizedWords = normalizeWords(str);
  let wordFrequencies = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    if (wordFrequencies[normalizedWords[i]] === undefined) {
      wordFrequencies[normalizedWords[i]] = 1;
    } else {
      wordFrequencies[normalizedWords[i]]++;
    }
  }
  return wordFrequencies;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
