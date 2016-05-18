'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizedWords = function getNormalizedWords(stringInput) {
  let words = stringInput.split(/\s+/);
  for(let i=0; i<words.length; i++){
    words[i] = words[i].replace(/\W+/, '').toUpperCase();
  }
  return words;
};


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function normalizedWords(stringInput) {
  let uniqueWords = {};
  let normalizedWordsList = normalizedWords(stringInput);
  for(let i = 0; i < normalizedWordsList.length; i++){
    uniqueWords[normalizedWordsList[i]] = 1;
  }
  return Object.keys(uniqueWords);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(stringInput, unique) {
  if(unique == false){
    return normalizedWords(stringInput).length;
  }else{
    return normalizedWords(stringInput).length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
