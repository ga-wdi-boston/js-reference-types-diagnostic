'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  const words = string.split(/\s+/)
  const normalizedWords = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i].replace(/\W+/, '')
    normalizedWords[i] = word.toUpperCase()
  }
  return normalizedWords()
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string)
let uniqueWordsAsKeys = {};
for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i]
  uniqueWordsAsKeys[word] = true
}

// The keys pulled out into a list
let uniqueWords = []

let keys = [];
let k = 0;
for (keys[k++] in uniqueWordsAsKeys);

uniqueWords = keys;
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string) {
  let wordTotal = 0
  for (let i = 0; i < string.length; i++) {
    if (string.split[i] === ' ') {
      wordTotal += 1
    }
    return wordTotal
  }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
}

module.exports = {
  normalizeWords,
//  uniqueWords,
  wordCount,
  wordFrequencies
}
