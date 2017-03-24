'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  const words = string.split(' ')
  let cleanWords = []
  for (let i = 0; i < words.length; i++) {
    cleanWords[i] = words[i].replace(/\W+/g, '')
    cleanWords[i] = cleanWords[i].toUpperCase()
  }
  return cleanWords
}
// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (wordArray) {
  let uniqueWords = []
  for (let i = 0; i < wordArray.lengh; i++) {
    if (uniqueWords.indexOf(wordArray[i]) === false) {
      uniqueWords.push(wordArray[i])
    }
  }
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string,uniqueIndicator) {
  const words = string.split(' ')
  let cleanWords = []
  for (let i = 0; i < words.length; i++) {
    cleanWords[i] = words[i].replace(/\W+/g, '')
    cleanWords[i] = cleanWords[i].toUpperCase()
  }
  if (uniqueIndicator === true){
    return cleanWords.length
  } else {
    let uniqueWords = []
    for (let i = 0; i < words.lengh; i++) {
        if (uniqueWords.indexOf(words[i]) === false) {
          uniqueWords.push(words[i])
        }
      }
  }
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
