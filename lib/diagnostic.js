'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  let normalizedWords = normalizeWords(paragraph);
  let uniqueWords = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWords[word] = true;
  }

  return uniqueWords;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (paragraph, countUnique = true) {
  if (countUnique) {

    return uniqueWords(paragraph).length;

  } else {

    return normalizeWords(paragraph).length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
