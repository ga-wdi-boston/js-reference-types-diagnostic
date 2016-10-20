'use strict';

// Reuse functions wherever possible.
const test = "This is my test string, it has duplicate words words words and punctuation."
  // 1. Write a function that takes a string argument
  // splits it into an array of normalized words
  // (uppercase strings without punctuation)
  // and returns that array.
const normalizeWords = function (str) {
  let words = str.split(/\s+/);
  return words.map(word => {
    return word.replace(/\W+/, "").toUpperCase();
  })

};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let words = normalizeWords(str);
  let uniqueWords = [];
  words.forEach(word => {
    if (uniqueWords.indexOf(word) == -1) {
      uniqueWords.push(word)
    }
  })
  return uniqueWords
};
// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (str, unique) {
  if (unique) {
    return uniqueWords(str).length
  }
  return normalizeWords(str).length
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (str) {
  let wordCounts = {};
  normalizeWords(str).forEach(word => {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  })
  return wordCounts
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
