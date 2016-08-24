'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const normalizedWords = function (paragraph) {
    let words = [];
    words = paragraph.split(/\s+/);
    let normalizedWords = [];
    for ( let i = 0; i < words.length; i++){
    normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
    }
    return normalizedWords;
    };
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  let words = [];
  words = paragraph.split(/\s+/);
  let normalizedWords = [];
  for ( let i = 0; i < words.length; i++){
  normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
  }
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++){
    uniqueWordsAsKeys[normalizedWords[i]] = true;
  }
  let uniqueWords = [];
  let count = 0;
  for (let key in uniqueWordsAsKeys){
    uniqueWords[count] = key;
    count ++;
  }
  return uniqueWords
};

// 3. Write a function that returns the count of words in a string.
// Provide the *option* to count unique words instead of total words.
const wordCount = function (paragraph) {
//for total words
  let words = [];
  words = paragraph.split(/\s+/);
  let normalizedWords = [];
  for ( let i = 0; i < words.length; i++){
  normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
  }
  console.log(normalizedWords.length);
  return wordCount
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function (paragraph) {
    let words = [];
    words = paragraph.split(/\s+/);
    let normalizedWords = [];
    for ( let i = 0; i < words.length; i++){
    normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
    }
    let uniqueWordsAsKeys = {};
    for (let i = 0; i < normalizedWords.length; i++){
      uniqueWordsAsKeys[normalizedWords[i]] = true;
    }
    let uniqueWords = [];
    let count = 0;
    for (let key in uniqueWordsAsKeys){
      uniqueWords[count] = key;
      count ++;
    }
    let wordFrequencies = {};
    for (let i = 0; i < normalizedWords.length; i++){
      if (wordFrequencies[normalizedWords[i]] === undefined){
        wordFrequencies[normalizedWords[i]] = 1;
      }
      else {
        wordFrequencies[normalizedWords[i]] += 1;
      }
    }
    return wordFrequencies
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
