'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {
  let str = "WE ARE TAKING A DIAGNOSTIC";
  console.log(str.split[" "]);
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
   let words = "I am sleep walking right now";
   console.log(words.normalize.split[""]);
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  let thangs = "We are going to return a count";
  return thangs.split("").length;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  let dictionary = {};
  return dictionary.split.length("");
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
