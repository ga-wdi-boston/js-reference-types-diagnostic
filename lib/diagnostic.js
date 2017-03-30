'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {
  const normalizeWords = normalizeWords.split(' ')
  for (let i = 0; i < normalizeWords.length; i++) {
    normalizeWords[i] = normalizeWords[i].toUpperCase()
  }
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (normalizeWords) {
  return uniqueWords(normalizedWords).split()
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  for (let i = 0; i < normalizedWords.length; i++) {
      let word = normalizedWords[i];
      wordCount[word] = addOne(wordCount[word]);
      }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  for (let i = 0; i < wordFrequencies.length; i++) {
    if (wordFrequencies[normalizedWords[i]] === undefined) {
      wordFrequencies[normalizedWords[i]] = 1
    } else {
      wordFrequencies[normalizedWords[i]]++
    }
  }
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
