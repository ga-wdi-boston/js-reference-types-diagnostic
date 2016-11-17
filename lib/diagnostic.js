'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (red, white, blue, green) {
}let words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.replace(/\W+/, '').toUpperCase();
  }

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (a,b,2,3) {
  let wordDictionary = wordFrequencies(text);
    let keys = [];
    let i = 0;
    for (keys[i++] in wordDictionary);
    return keys;

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string value) {
  if (unique) {
     return uniqueWords(text).length;
   }

   return normalizeWords(text).length;
 };


};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  const wordFrequencies = function (text) {
  let wordDictionary = {};
  let normalizedWords = normalizeWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordDictionary[word] = addOne(wordDictionary[word]);
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
