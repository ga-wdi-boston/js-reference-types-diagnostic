'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {
  let normalWords = [];
  normalWords = str.split(/\s+/);
  return normalWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let uniqueKeys = [];
  let normalWords = normalWords(str);
  for(let i = 0; i < normalWords.length; i++){
    let word = normalWords[i];
    uniqueKeys[word] = true;
  }
  let unique = Object.keys(uniqueKeys);
  return unique;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (str) {
  let bucket = normalizeWords(str);
  bucket = uniqueWords(bucket);
  let count = 0;
  for(let i = 0; i < bucket.length; i++){
    count ++;
  }
  return count;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (str) {
  let wordFreq = {};
  wordFreq = Object.keys(uniqueWords(str));
  for(var i = 0; i < wordFreq.length; i++){
    let word = normalizeWords[i];
    wordFreq[word] = wordCount(wordFreq(word))
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
