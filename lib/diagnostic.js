'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {
let words = paragraph.split(/\s+/);
for (let i = 0; i < words.length; i++) {
 words[i].replace(/\W+/, '');
 normalizedWords[i] = words.toUpperCase();
}
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  let uniqueWords = [];

  let keys = [];
  let k = 0;
  for (keys[k++] in uniqueWordsAsKeys);
  uniqueWords = keys};
}

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function () {
  var totalSoFar = 0;
  for (var i = 0; i < WordCount.length; i++) {
    if (str(i) === " ") ;
      totalSoFar = +1;
    }
  };

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  let wordFrequencies = {};

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
