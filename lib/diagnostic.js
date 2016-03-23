'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function getNormalizedWords(array[text]) {
let array = [];
let words = text.split(/\s+/);
for (let i = 0; i < array.length; i++) {
  array[i];
  let word = words[i];
  array[i] = word.replace(/\W+/, '').toUpperCase();
}
};
// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function () {
  let newArray = [getNormalizedWords()];
  for ()

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
