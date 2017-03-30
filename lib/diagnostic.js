'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  words = [words.split(' ')]
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {
  for (i = 0; i < normalizeWords.length; i++) {
    uniqueWords[i] = normalizeWords[i].toUpperCase()
  }
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.
const wordCount = function (test) {
  for (i = 0; i < test.length; i++) {
    if ( === undefined)
  }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
