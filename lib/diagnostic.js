'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let arrayOfWords = string.toUpperCase().split(' ');
  console.log(arrayOfWords);
};

let string = "This is my Sentence!";

normalizeWords(string);

// use somehow /\w/ to get rid of punctation

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  return let arrayUniqueNormalizedWords = string.split(' ');
};

let string = "This is my string string";

uniqueWords(string);

// returns a array but not unique words yet

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (string) {
 let string = string.length;
};

wordCount("This is my sentence");
console.log(string);

//no option for unique words

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
