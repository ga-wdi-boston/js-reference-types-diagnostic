'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let words = string.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].replace(/\W+/, '').toUpperCase();
  }

  return words;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let normalizedWords = normalizeWords(string);
  let uniqueWords = {};

  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWords[normalizedWords[i]] = true;
  }

  return Object.keys(uniqueWords);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string, countUnique) {
  let allWords = normalizeWords(string);
  let uniqueOnly = uniqueWords(string);

  if (countUnique === undefined) {
    return allWords.length;
  } else {
    return uniqueOnly.length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (string) {
  let allWords = normalizeWords(string);

  let wordFrequency = {};

  for (let i = 0; i < allWords.length; i++) {
    if (wordFrequency[allWords[i]] === undefined) {
      wordFrequency[allWords[i]] = 1;
    } else {
      wordFrequency[allWords[i]]++;
    }
  }

  return wordFrequency;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
