'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function () {
  let var myString = "Hello, My name is David A Fonte.";
  let var splitResult = myString.toUpperCase.split("\\s+");
};
return splitResult;

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function onlyUnique(value, index, self) {
  let var a = "Apple orange banana orange grape";
  let var unique = a.filter(onlyUnique);
};
return self.indexOf(value) === index;

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (str) {
  if str > 1;
    return str.split (" ").length;
  else;
    return str
};
return (wordCount("Hello, My name is David Fonte"));
// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
