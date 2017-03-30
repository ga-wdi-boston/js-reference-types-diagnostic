'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const sentences = 'When in the Course of human events, it becomes necessary for one ' +
'people to dissolve the political bands which have connected them ' +
'with another, and to assume among the powers of the earth, the ' +
'separate and equal station to which the Laws of Nature and of ' +
'Nature\'s God entitle them, a decent respect to the opinions of ' +
'mankind requires that they should declare the causes which impel ' +
'them to the separation.'

const normalizeWords = function () {
  sentences.split(' ')
//attempted

}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const sentences = 'When in the Course of human events, it becomes necessary for one ' +
'people to dissolve the political bands which have connected them ' +
'with another, and to assume among the powers of the earth, the ' +
'separate and equal station to which the Laws of Nature and of ' +
'Nature\'s God entitle them, a decent respect to the opinions of ' +
'mankind requires that they should declare the causes which impel ' +
'them to the separation.'


const uniqueWords = function (/* */) {
  /* your response here */
for (var i = 0; i < sentences.length; i++) {
  (if sentences === undefined)

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
