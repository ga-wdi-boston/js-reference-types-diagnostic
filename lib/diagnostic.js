'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const addOne = (num) => (num || 0) +1;

const normalizeWords = function (str) {
  let splitWords = str.split(/\s+/);
  let normalizedWords = [];
  for(let i = 0; i < splitWords.length; i++){
    normalizedWords[i] = splitWords[i].replace(/\W/,'').toUpperCase();
  }
  return normalizedWords;

};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let normalized = normalizeWords(str);
  let uniqueWords = [];
  for(let i = 0; i < normalized.length; i++){
    let validity = false;
    for (let j = 0; j < uniqueWords.length; j++) {
      if(normalized[i] === uniqueWords[j]){
        validity = true;
      }
    }
    if(!validity){
      uniqueWords[uniqueWords.length] = normalized[i];
    }
  }
return uniqueWords;
};



// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (str) {
  let wordFrequencies = {};
  let normalized = normalizeWords(str);
  let uniqueWordList = uniqueWords(normalized);
  for(let i = 0; i < normalized.length; i++){
    let word = normalized[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
  return normalized.length
  
};



// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (str) {
  let normalized = normalizeWords(str);
  let dic = {};
  for(let i = 0; i < normalized.length; i++){

  }

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
