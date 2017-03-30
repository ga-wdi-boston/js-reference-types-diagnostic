'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (input) {
  /* your response here */
  const words = input.split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toUpperCase().replace(/[^\w]/g, '')
  }

  return words
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (input) {
  /* your response here */
  const words = []
  for (const word of input) {
    console.log(word)
    if (words.indexOf(word) !== -1) {
      words.push(word)
    }
  }
  return words
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (params) {
  /* your response here */
  const input = params[0]
  const unique = params[1] // boolean
  const words = normalizeWords(input)

  if (unique) {
    const words = uniqueWords(words)
  }
  const numWords = words.length
  return numWords
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (input) {
  /* your response here */
  const dictionary = {}
  for (const word of input) {
    if (!dictionary[word]) {
      // add word (count=1)
      dictionary[word] = 1
    } else {
      // increment
      dictionary[word] += 1
    }
  }
  return wordFrequencies
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
/*
const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.'
  */
