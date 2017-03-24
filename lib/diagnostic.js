'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizedWords = []

const normalizeWords = function (string) {
  const wordList = string.split(' ')
  for (let i = 0; i < wordList.length; i++) {
    normalizedWords[i] = wordList.toUpperCase()
  }
  return normalizedWords
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let uniqueWordsAsKeys = {}

const uniqueWords = function (string) {
  for (let i = 0; i < normalizedWords.length; i++) {
    if (uniqueWordsAsKeys[normalizedWords[i]] !== undefined) {
      uniqueWordsAsKeys[normalizedWords[i]++
    } else {
      uniqueWordsAsKeys[normalizedWords[i] = 1
    }
  }

  let uniqueWords = []

  for (let key in uniqueWordsAsKeys) {
    if (uniqueWordsAsKeys[key] === 1) {
      uniqueWords.push(key)
    }
  }
  return uniqueWords
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
