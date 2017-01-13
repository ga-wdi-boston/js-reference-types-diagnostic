'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';
  let words = [];
  words = paragraph.split(/\s+/);
console.log("Words is ", words);

const normalizeWords = function () {
  /* your response here */
  let normalizeWords = [];
  for(let i = 0; i <words.length; i++){
    normalizeWords[i] = words[i].replace(/\W+/, '').toUpperCase();
  }
  console.log("normalizeWords is now", normalizeWords);
};




// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  /* your response here */
  let uniqueWordsAsKeys = {};
  for(let i = 0; i < normalizeWords.length; i++){
    uniqueWordsAsKeys[normalizeWords[i]] = true;
  }
  console.log('uniqueWordsAsKeys is now ', uniqueWordsAsKeys);
  let uniqueWords = [];
  return uniqueWords();
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  /* your response here */
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
