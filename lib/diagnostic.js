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
const normalizeWords = function () {
  for (let i = 0; i < words.length; i++) {
    normalizedWords[i] = words[i].toUpperCase()
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function () {
  or (let i = 0; i < words.length; i++) {
    normalizedWords[i] = words[i]
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function () {
  for (let i = 0; i < normalizedWords.length; i++) {
    if (uniqueWordsAsKeys[normalizedWords[i]] === undefined)
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function () {
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWordsAsKeys[normalizedWords][i] = 1
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
