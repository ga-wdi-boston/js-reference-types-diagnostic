'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
// Change words to uppercase
  let cleanWords = words.toUpperCase()

// Initial removal of punctuation using a replace method from string prototype
  cleanWords = cleanWords.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

  // Second removal of punctuation using a replace method from string prototype
  cleanWords = cleanWords.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

  // Split up clean words
  cleanWords = cleanWords.split(' ')

  return cleanWords
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {

  const cleanWords = normalizeWords(words)

  const uniqueWordsNew = []

  for (let i = 0; i < cleanWords.length; i++) {
    if (uniqueWordsNew.indexOf(cleanWords[i]) === -1) {
      uniqueWordsNew.push(cleanWords[i])
    }
  }
  return uniqueWordsNew
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (words, unique) {
  const cleanWords = normalizeWords(words)
  const uniqueWord = uniqueWords(words)

  if (unique === true) {
    return uniqueWord.length
  } else {
    return cleanWords.length
  }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (words) {
  const cleanWords = normalizeWords(words)
  const uniqueWord = uniqueWords(words)

  const dictionary = { }
  for (let i = 0; i < uniqueWord.length; i++) {
    dictionary[uniqueWord[i]] = 0

    for (let x = 0; x < cleanWords.length; x++) {
      if (uniqueWord[i] === cleanWords[x]) {
        dictionary[uniqueWord[i]]++
      }
    }
  }
  return dictionary
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
