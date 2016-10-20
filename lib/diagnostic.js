'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const getNormalizedWords = function(string) {
  // split the string into an array of words
  let words = string.split(/\s+/);
  // normalize these words
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const getUniqueWords = function(string) {
  let normalizedWords = getNormalizedWords(string);
//create object of unique words
  let uniqueWordsAsKeys = {};
// The words stored as keys of a dictionary
    for (let i = 0; i < normalizedWords.length; i++) {
      let word = normalizedWords[i];
      uniqueWordsAsKeys[word] = true;
  }
// The keys pulled out into a list
let uniqueWords = [];

let keys = [];
let k = 0;

for(keys[k++] in uniqueWordsAsKeys); // jshint ignore:line

uniqueWords = keys;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function(string, unique){
  unique = (unique || false);
  if (unique === true) {
    let uniqueWords = getUniqueWords(string);
    return uniqueWords.length;
  } else {
    let normalizedWords = getNormalizedWords(string);
    return normalizedWords.length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function () {
  // The words as keys and the values the count of each word
  const addOne = function(num){
    return (num || 0) +1;
  };

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};






module.exports = {
  normalizedWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
