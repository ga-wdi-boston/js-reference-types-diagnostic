'use strict'

// Reuse functions wherever possible.
const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.'

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizeWords = function ('stringArgument') {

  let words = stringArgument.split(' ')
  let normalizeWords = []

  for (let i = 0; i < words.length; i++) {
    normalizeWords[i] = words[i].toUpperCase()
  }
}

getNormalizedWords()

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const getUniqueWords = function ('stringArgument') {

  getNormalizeWords() // this is defined above in #1

  let uniqueWordsAsKeys = {};

      for (let i = 0; i < normalizedWords.length; i++) {
       if (uniqueWordsAsKeys[normalizedWords[i]] !== undefined) {
         uniqueWordsAsKeys[normalizedWords[i]]++
       } else {
         uniqueWordsAsKeys[normalizedWords[i]] =1
       }
     }
}

getUniqueWords()

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function ('stringArgument') {};

for (let key in uniqueWordsAsKeys) {
  if (uniqueWordsAsKeys[key] === 1) {
    uniqueWordsAsKeys(key)
  }
}

let uniqueWords = [];

for (let key in uniqueWordsAsKeys) {
  if (uniqueWordsAsKeys[key] === 1) {
    uniqueWords.push(key)
  }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function ('dictionary') {
  for (let key in uniqueWordsAsKeys) {
    if (uniqueWordsAsKeys[key] === 1) {
      uniqueWordsAsKeys(key)
    }
  }
  let uniqueWords = [];

for (let count = 0; for count < uniqueWordsAsKeys.length; count++) {
  for (let key in uniqueWordsAsKeys) {
    if (uniqueWordsAsKeys[key] === 1) {
      uniqueWords.push(key)
    }
  }
}

}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
