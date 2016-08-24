'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const stringArgument = 'This is a String Argument';

const normalizeWords = function () {
  for (let i = 0; i < stringArgument.length; i++){
    normalizeWords[i] = stringArgument[i].replace(/\W+/, '').toUpperCase();
  }
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {

  /* your response here */
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function () {
  for (let i = 0; i < stringArgument.length; i++){
    if (wordCount[stringArgument[i]] === undefined){
      wordCount[stringArgument[i]] = 1;
    }
  else {
    wordCount[stringArgument[i]]++;
    }
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function () {
  for (let i = 0; i < stringArgument.length; i++){
    wordFrequencies[stringArgument[i]] += wordFrequencies[stringArgument[i]];
  }
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
