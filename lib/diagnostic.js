'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  let words = text.split(/\s+/);
  let normWords = [];
  for (let i = 0; i < words.length; i++) {
    normWords[i] = words[i].replace(/\W+/,'').toUpperCase();
  }
  return normWords;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
// note: Moved this up above #2 because I'm using this function in #2.
const wordFrequencies = function (text) {
  let normWords = normalizeWords(text);
  let uniqueWords = {};
  for (let i = 0; i < normWords.length; i++) {
    let word = normWords[i];
    uniqueWords[word] = (uniqueWords[word] || 0) + 1;
  }
  return uniqueWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  return Object.keys(wordFrequencies(text));
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (text,uniq) {
  if (uniq) {
    return uniqueWords(text).length;
  } else {
    return normalizeWords(text).length;
  }
};



module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
