'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function (text) {
  let words = text.split(' ');
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toUpperCase().replace(/\W+/, '');
    normalizedWords[i] = word;
  }
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  let uniqueWords = {};
  let normalizedWords = getNormalizedWords(text);
for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i];
  uniqueWords[word] = word;
}
return Object.keys(uniqueWords);
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (text, unique) {
  if (unique) {
    return uniqueWords(text).length;
  } else {
    return getNormalizedWords(text).length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key

const wordFrequencies = {};

const addOne = function (num) {
  return (num || 0) + 1;
};

for (let i = 0; i < getNormalizedWords.length; i++) {
  let word =  getNormalizedWords[i];
  wordFrequencies[word] = addOne(wordFrequencies[word]);
}

module.exports = {
  getNormalizedWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
