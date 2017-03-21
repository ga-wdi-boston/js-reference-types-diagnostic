'use strict'

// Reuse functions wherever possible.

const addOne = function (num) {
  return (num || 0) + 1
}

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  const words = text.split(/\s+/)
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    words[i] = word.replace(/\W+/, '').toUpperCase()
  }

  return words
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (text) {
  const wordDictionary = {}
  const normalizedWords = normalizeWords(text)
  for (let i = 0; i < normalizedWords.length; i++) {
    const word = normalizedWords[i]
    wordDictionary[word] = addOne(wordDictionary[word])
  }

  return wordDictionary
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  const wordDictionary = wordFrequencies(text)
  const keys = []
  let i = 0
  for (keys[i++] in wordDictionary); // jshint ignore: line
  return keys
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.
const wordCount = function (text, unique) {
  if (unique) {
    return uniqueWords(text).length
  }

  return normalizeWords(text).length
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
