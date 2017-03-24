'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {
  /* your response here */
}
let words = [paragraph.split(" ")]
let normalizeWords = [];
for (let i = 0); i < words.lenght; i++) {
  normalizeWords[i]=correct[i].toUpperCase();
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  /* your response here */
}
let uniqueWords = []


// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string) {
  return string.split(" ").legnth;
}



// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
}
let (uniqueWordsAsKeys = {};

  for (let i=0; i < normalizeWords.legnth; i++) {
    if (uniqueWordsAsKeys[normalizeWords[i]] == undefined) {
      uniqueWordsAsKeys[normalizeWords[i]++]
    } else {
      uniqueWordsAsKeys[normalizeWords[i]]=1;
    }
  }
for (let key in uniqueWordsAsKeys) {
  if (uniqueWordsAsKeys[key] === 1) {
    uniqueWords.push(key)
  }
}


module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
