'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

let sampleString = 'some test string. With puncutation!'

let normalizeWords = function (aString) {
  for (let i = 0; i < words.length; i++){
    normalizedWords[i] = words[i].toUpperCase()
    normalizedWords[i] = regex(normalizedWords[i])
  }
}

function regex(str) {
return str.replace(/(~|`|!|@|#|$|%|^|&|*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|+|=)/g,"")
}

let splitString = function(stringToSplit, separator){
  let arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings
};

var space = ' ';

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  /* your response here */
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
