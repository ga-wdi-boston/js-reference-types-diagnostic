'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  words = words.split(/\s+/);
  return words.map(function (word) {
    return word.toUpperCase().replace(/\W+/, '');
  });
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {
  let uniqueWords = [];
  let uniqueWordsAsKeys = {};
  const normalizedWords = normalizeWords(words);

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }

  for (let prop in uniqueWordsAsKeys) {
    uniqueWords.push(prop);
  }

  return uniqueWords;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (words, option) {
  const normalizedWords = normalizeWords(words);
  const uniqueWordsArray = uniqueWords(words);

  if (option) {
    return uniqueWordsArray.length;
  } else {
    return normalizedWords.length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (words) {
  let wordFrequencies = {};
  const normalizedWords = normalizeWords(words);

  normalizedWords.forEach(function (word) {
    if (wordFrequencies[word]) {
      wordFrequencies[word] += 1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
  return wordFrequencies;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
