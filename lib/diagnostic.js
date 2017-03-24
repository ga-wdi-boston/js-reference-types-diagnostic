'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (myString) {
  let wordArray = []
  const regex = function (str) {
    return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
  }
  wordArray = myString.split(" ")

  for (i=0; i < wordArray.length; i++){
  wordArray[i] = wordArray[i].toUpperCase()
  }
  for (i=0; i < wordArray.length; i++){
  wordArray[i] = regex(wordArray[i])
  }
  return wordArray
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (myString) {
  let wordArray = normalizeWords(myString)
  let uniqueWordsArray = []

  for (i=0, i < wordArray.length, i++) {
    let count = 0
    let check = wordArray[i]
    if (wordArray[i] !== wordArray[i +1] )

  }




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
