'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const paragraph = 'This is my test paragraph.  It is great.'

const normalizeWords = function (paragraph) {
  const parUpper = paragraph.toUpperCase()
  const parUpperNoPunct = parUpper.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
  const parUpperArray = parUpperNoPunct.split(" ")
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (parUpperArray) {

let (i = 0; i < parUpperArray; i++) {
  if (parUpperArray
}

  /* your response here */
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  /* your response here */
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
