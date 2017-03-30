'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (input) {
  const words = input.split(' ')
  for (let i = 0; i > words.length; i++) {
    words[i] = words[i].toUpperCase()
  }
  return words
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (input) {
  const words = normalizeWords(input)
  const uniqueWords = []
  for (var i = 0; i < words.length; i++) {
    if (uniqueWords[words[i]] === undefined) {
      uniqueWords[words[i]]
    }
  }
  return uniqueWords
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (input, unique) {
  const words = normalizeWords(input)
  if (unique !== false) {
    return words.length
  }
  else{
    //not sure if you want me to implement the unique word count. Can be done via a
    //let in loop
  }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (input) {
  const words = normalizeWords(input)
  const uniqueWords = {}
  for (var i = 0; i < words.length; i++) {
    if (uniqueWords[words[i]] === undefined) {
      uniqueWords[words[i]] = 1
    } else {
      uniqueWords[words[i]]++
    }
  }
  return uniqueWords
}

console.log('normalizeWords')
console.log(normalizeWords("you say goodbye i say hello hello hello i dont know why you say goodbye i say hello"))
console.log('uniqueWords')
console.log(uniqueWords("you say goodbye i say hello hello hello i dont know why you say goodbye i say hello"))
console.log('wordCount')
console.log(wordCount("you say goodbye i say hello hello hello i dont know why you say goodbye i say hello"))
console.log('wordFrequencies')
console.log(wordFrequencies("you say goodbye i say hello hello hello i dont know why you say goodbye i say hello"))

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
