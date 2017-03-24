'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.'

function regex (str) {
  return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, '')
}

const reformatted = regex(paragraph)

const normalizeWords = function (paragraph) {
  const words = paragraph.split(' ')
  const normalizedWords = []
  for (let i = 0; i < words.length; i++) {
    normalizedWords[i] = words[i].toUpperCase()
  }
  return normalizedWords
}

const reformattedWords = normalizeWords(reformatted)

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const uniqueWords = function (reformattedWords) {
  const uniqueWordsAsKeys = {}
  for (let i = 0; i < reformattedWords.length; i++) {
    if (uniqueWordsAsKeys[reformattedWords[i]] !== undefined) {
      uniqueWordsAsKeys[reformattedWords[i]]++
    } else {
      uniqueWordsAsKeys[reformattedWords[i]] = 1
    }
  }
  const uniqueWords = []
  for (let key in uniqueWordsAsKeys) {
    if (uniqueWordsAsKeys[key] === 1) {
      uniqueWords.push(key)
    }
  }
  return uniqueWords
}

const listUniqueWords = uniqueWords(reformattedWords);

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

// Solution taken from js-reference-types/lib/lab.js.
// I'm still trying to understand how line 66 works.
const wordCount = function wordCount (arr, unique) {
  let getWords = unique ? uniqueWords : normalizeWords
  let count = getWords(arr).length
  return count
}

const listWordCount = wordCount(reformatted)

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key

// Referenced stack overflow to help with this solution.
// Need to figure out a simpler way to do this that applies material from class
const wordFrequencies = function (arr) {
  const a = []
  const b = []
  let prev = []

  arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i])
      b.push(1)
    } else {
      b[b.length - 1]++
    }
    prev = arr[i]
  }

  const listWithCount = {
    word: a,
    count: b
  }

  return listWithCount
}

const listWithWordCount = wordFrequencies(reformattedWords)

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
