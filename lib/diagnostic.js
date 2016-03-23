'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const text = "This is a bunch of text to be split below for the purposes of practice";

const normalizeWords = function () {
  let normalizeWords = text.split(/\s+/);
};

for (let i = 0; i < text.length; i++) {
  let text = text[i];
  normalizeWords[i] = text.replace(/\W+/, '').toUpperCase();
}

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (te) {

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniquewords[word] = true;
  }

};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function () {
  return text.length;

};

};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function () {

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
