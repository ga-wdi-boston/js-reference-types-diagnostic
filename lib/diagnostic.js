'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  string = string.split(' ')
  for (let i = 0; i < string.length; i++){
    string[i] = string[i].toUpperCase();
}
  return string
}

  /* your response here */

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  string = string.split(' ')
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 0) {
      string.push([i])
    } return string
  }
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string) {
  string = string.split(' ')
  return string.length
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  string = string.split(' ')
  for (let i = 0; i < string.length; i++)
  return string[i]
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
