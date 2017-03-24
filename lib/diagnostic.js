'use strict'

// Reuse functions wherever possible.
// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  const stringArray = string.split(' ')
  for (let i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].replace(/[^A-Za-z0-9_]/g, '')
    stringArray[i] = stringArray[i].toUpperCase()
  }
  return stringArray
  /* your response here */
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  const normalizedWords = normalizeWords(string)
  const uniqueWords = []
  for (let i = 0; i < normalizedWords.length; i++) {
    if (uniqueWords.indexOf(normalizedWords[i]) === -1) {
      uniqueWords.push(normalizedWords[i])
    }
  }
  return uniqueWords
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string, uniqueOnly) {
  if (uniqueOnly) {
    return uniqueWords(string).length
  } else {
    return string.split(' ').length
  }
  /* your response here */
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  const uniqueWordCount = {}
  const uniqueWordsList = uniqueWords(string)
  for (let i = 0; i < uniqueWordsList.length; i++) {
    if (uniqueWordCount[uniqueWordsList[i]]) {
      uniqueWordCount[uniqueWordsList[i]]++
    } else {
      uniqueWordCount[uniqueWordsList[i]] = 1
    }
  }
  return uniqueWordCount
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
