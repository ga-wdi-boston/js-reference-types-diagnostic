'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  for (let i = 0; i < words.length; i++) {
  let word = words[i].split(/\s+/).replace(/\W+/, '');
  normalizedWords[i] = word.toUpperCase();
  }
  return paragraph;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let paragraph = [];
const uniqueWords = function (paragrapg) {
  for ( let i = 0; i < paragraph.length; i++){
    let word = normalizedWords[i];
    normalizedWords = word.split();
  }
  return paragraph;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (paragraph) {
  let word = wordCount[i]
  for (let i = 0; i < paragraph.length, i++){
    if (i !unique){
      count
    };

  };
};

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
