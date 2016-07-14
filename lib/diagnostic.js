'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let stringArray=string.split(/\s+/);
  let normalWords=[];
  for(let i=0;i<stringArray.length;i++){
    let word=stringArray[i].replace(/\W+/, '').toUpperCase();
    normalWords[i]=word;
  }
  return normalWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let stringArray=normalizeWords(string);
  return stringArray;
};


// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string) {
  let countword=normalizeWords(string);
  return countword.length;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
