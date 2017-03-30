'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (aString) {
  /* your response here */
  const stringArray = aString.toUpperCase().split(' ')
  return stringArray
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (aString) {
  /* your response here */
  const uniqWords = {}
  const stringArray = normalizeWords(aString)
  for (let i = 0; i < stringArray.length; i++) {
    if (uniqWords[stringArray[i]] === undefined) {
      uniqWords[stringArray[i]] = 1
    } else {
      uniqWords[stringArray[i]]++
    }
  }
  const wordArray = []
  for (let k in uniqWords) {
    wordArray.push(k)
  }
  console.log(wordArray)
  return wordArray
}

uniqueWords('hello from the other side hello there side')

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (aString, unique) {
  /* your response here */
  let wordArray
  if (unique) {
    wordArray = uniqueWords(aString)
  } else {
    wordArray = normalizeWords(aString)
  }
  console.log(wordArray.length)
  return wordArray.length
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (aString) {
  /* your response here */
  const uniqWords = {}
  const stringArray = normalizeWords(aString)
  for (let i = 0; i < stringArray.length; i++) {
    if (uniqWords[stringArray[i]] === undefined) {
      uniqWords[stringArray[i]] = 1
    } else {
      uniqWords[stringArray[i]]++
    }
  }
  console.log(uniqWords)
  return uniqWords
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
