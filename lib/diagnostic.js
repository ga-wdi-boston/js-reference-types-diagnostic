'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (x) {
  let normalUpArray = x.split(" , ").toUppercase();
  return normalUpArray;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (y) {
  let uniqueWords = [];
  let allwords = normalizeWords(y);
  for (let i = 0; i < allwords.length; i++){
    if (allwords[i] in uniqueWords){
      continue;
    }//if
    else{
      uniqueWords.push(allwords[i]);
    }//else
  return uniqueWords;
  }//for loop
};//uniqueWords

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (z) {
  // not enough time :(
  allwords = normalizeWords(z)
  countOfWords = allwords.count;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  // not enough time :(
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
