'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const splitWords = function (paragraphString){
  let words = paragraph.split(' ');
}

const normalize = function (words) {
  //get rid of non letters in each word split
  return words.replace(/\W+/,'').toUpperCase();
}


const normalizeWords = function (paragraph) {
  words = splitWords(paragraph);
  return normalArray = words.map(normalize);
};

const uniqueWordsToKeys = function(array){
  let result = {};
  array.forEach(function(word){
    result[word] = 0;
  })
  return result
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  normalArray = normalizeWords(paragraph);
  let uniqueWordList = Object.keys(uniqueWordsToKeys(normalArray))
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (paragraph) {
  uniqueWordList = uniqueWords(paragraph)
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (word) {
  if (wordFrequencies[word]){
    wordFrequencies[word] += 1;
  } else {
    wordFrequencies[word] = 1;
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
