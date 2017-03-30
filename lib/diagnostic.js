'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let arrayWords = []
  arrayWords = string.split(' ')
  for (let i = 0; i < arrayWords.length; i++) {
    arrayWords[i] = arrayWords[i].toUpperCase()
  }
  return arrayWords
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let arrayWords = []
  arrayWords = string.split(' ')
  for (let i = 0; i < arrayWords.length; i++) {
    arrayWords[i] = arrayWords[i].toUpperCase()
  }
  let uniqueArrayWords = []
  for (var i = 0; i < arrayWords.length; i++) {
    uniqueArrayWords[i] =

  }
}


// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const totalWordCount = function (string) {
  let arrayWords = []
  arrayWords = string.split(' ')
  for (let i = 0; i < arrayWords.length; i++) {
    arrayWords[i] = arrayWords[i].toUpperCase()
  }
  const totalWords = arrayWords.length
  return totalWords
}

const wordFrequenciesCount = function (string) {
  let arrayWords = []
  arrayWords = string.split(' ')
  for (let i = 0; i < arrayWords.length; i++) {
    arrayWords[i] = arrayWords[i].toUpperCase()
  }
  const wordsWithFreq = {}
  for (let i = 0; i < arrayWords.length; i++) {
  if (wordsWithFreq[arrayWords[i]] === undefined) {
    wordsWithFreq[arrayWords[i]] = 1
  } else {
    wordsWithFreq[arrayWords[i]]++
  }
  return wordsWithFreq.length
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  let arrayWords = []
  arrayWords = string.split(' ')
  for (let i = 0; i < arrayWords.length; i++) {
    arrayWords[i] = arrayWords[i].toUpperCase()
  }
  const wordsWithFreq = {}
  for (let i = 0; i < arrayWords.length; i++) {
  if (wordsWithFreq[arrayWords[i]] === undefined) {
    wordsWithFreq[arrayWords[i]] = 1
  } else {
    wordsWithFreq[arrayWords[i]]++
  }
  return wordsWithFreq
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
