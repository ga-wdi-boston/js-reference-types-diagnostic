'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  let words = text.split (/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizedWords[i] = word.replace(/\W+/, '').toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (normText) {
  let uniqueWords = [];
  for(let i = 0; i < normText.length; i++ ) {
    let word = normText[i];
      if(normText.indexOf(word) === undefined) {
        uniqueWords.push(word);
      }
  } return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function () {

};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function () {

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
