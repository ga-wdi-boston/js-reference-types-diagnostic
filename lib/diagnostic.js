'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  /* assuming the const gettysburgAddress has been set up */
  let wordArray = words.split(" ")
  return wordArray
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {
  /* your response here */
  let uniqueWordArray
  let wordObject = {}
  let wordArray = normalizedWords(words)

  for (let i=0; i<wordArray.length; i++) {
    if (wordObject.wordArray[i] === undefined) {
      wordObject[wordArray[i]] = 1
    } else {
      wordObject.wordArray[i]++
    }
  }

  for (key in wordObject) {
    if (key > 1) {
      uniqueWordArray.push(key)
    }
  return uniqueWordArray
  }
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
