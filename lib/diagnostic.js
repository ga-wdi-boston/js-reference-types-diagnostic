'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const sentence = 'Apple apple pear orange orange orange'

/* create a function that will loop through all the words in the string and
return them indiviudally and uppercase as an array */
const normalizeWords = function () {
  //creating a new var that splits the words from the practice sentence
  let words = sentence.split(' ')
  //create a new array to hold the words in uppercase
  let normalizedWords = []

  for (let i = 0; i < words.length; i++){
    normalizedWords[i] = normalizedWords[i].toUpperCase()
  }

return normalizeWords

}

normalizeWords()

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  // loop through the words list and find the unique words
  for (let i = 0; i < words.length; i++)
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
