'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  // Split paragraph by spaces into an array of words. Then replace all non-word
  // characters with empty strings and capitalize all characters.
  let normalizedWords = paragraph.split(/\s+/);
  for (let i = 0; i < normalizedWords.length; i++) {
    normalizedWords[i] = normalizedWords[i].replace(/\W+/, '').toUpperCase();
  }

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  // Create an object to store all unique words from normalized word array.
  let uniqueWordsObject = {};
  let normalizedWords = normalizeWords(paragraph);

  // Assign each word as a key of the unique words object. Objects cannot have
  // duplicate keys, so this will remove duplicate words.
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWordsObject[normalizedWords[i]] = true;
  }

  // Fill an array with the keys in the unique words object.
  let uniqueWordsArray = [];
  let count = 0;
  for (let key in uniqueWordsObject) {
    uniqueWordsArray[count] = key;
    count++;
  }

  return uniqueWordsArray;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (paragraph, countUnique) {
  // If a count of unique words is requested, return the length of the unique
  // words array. Else, return the length of the normalized words array.
  if (countUnique) {
    return uniqueWords(paragraph).length;
  } else {
    return normalizeWords(paragraph).length;
  }

};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (paragraph) {
  // Create a word frequencies object to store the count of each word in the
  // normalized words array at a key matching that word.
  let normalizedWords = normalizeWords(paragraph);
  let wordFrequencies = {};

  // If a key does not exist, add it to the object and initialize the count to
  // one. Else, increment the count at that key.
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
