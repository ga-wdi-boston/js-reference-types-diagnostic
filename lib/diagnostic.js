'use strict'

// Reuse functions wherever possible.
//string for checking
const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';


// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  string = string.replace(/'|,|\./g, '')
  // console.log(string)
  const normalArray = string.split(' ')
  for (let i = 0; i < normalArray.length; i++) {
    normalArray[i] = normalArray[i].toUpperCase()
  }
  console.log(normalArray)
  return normalArray
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  const normalArray = normalizeWords(string)

  const uniqueWordsAsKeys = {}
  for (let i = 0; i < normalArray.length; i++) {
    if (uniqueWordsAsKeys[normalArray[i]] !== undefined) {
      uniqueWordsAsKeys[normalArray[i]]++
    } else {
      uniqueWordsAsKeys[normalArray[i]] = 1
    }
  }

  const uniqueWords = []
  for (const key in uniqueWordsAsKeys) {
    if (uniqueWordsAsKeys[key] === 1) {
      uniqueWords.push(key)
    }
  }
  console.log(uniqueWords)
  return uniqueWords
}


// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string, uniqueBool) {
  // Don't forget to reuse functions wherever possible!
  if (uniqueBool === true) {
    return uniqueWords(string).length
  } else if (uniqueBool === false) {
    return normalizeWords(string).length
  }
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  const dictionary = {}
  const uniqueCount = wordCount(string, true)
  const uniqueArray = uniqueWords(string)
  for (let i = 0; i < uniqueArray.length; i++) {
    dictionary.uniqueArray[i] = uniqueCount[i]
  }
  console.log(dictionary)
  return dictionary
}

wordFrequencies(paragraph)

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
