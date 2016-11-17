'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {
  return str.split(' ').map(function (word) {
    return word.toUpperCase().replace(/[^A-Z]/g, '');
  });
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let obj = {};
  normalizeWords(str).forEach(function (element) {
    obj[element] = null;
  });
  return Object.keys(obj);
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (str, unique) {
  if (arguments.length === 2 && unique === true) {
    return uniqueWords(str).length;
  } else {
    return normalizeWords(str).length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (str) {
  let freqDict = {};
  let normWords = normalizeWords(str);
  normWords.sort();
  let i = 0;
  while(i < normWords.length) {
    let wordFreq = 1;
    while(normWords[i] === normWords[i+wordFreq]) {
      wordFreq++;
    }
    freqDict[normWords[i]] = wordFreq;
    i += wordFreq;
  }
  return freqDict;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
