'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function getNormalizedWords(text) {

  let words = text.split(/\s+/);
  let normalizedWords = [];

  for (let i = 0; i < words.length; i++){
    let word = words[i].replace(/\W+/'');
    normalizedWords[i] = word.toUpperCase();
  }
    return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function getUniqueWords(text) {

  let normalizedWords = getNormalizedWords(text);
  let uniqueWords = getUniqueWordsAsKeys{};

  for ( i = 0; i < normalizedWords.length; i ++){

    let getUniqueWordsAsKeys = true;

  }
  return
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function wordCount(word, unique) {
  let count =

  return count;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {


  return wordFrequencies
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
