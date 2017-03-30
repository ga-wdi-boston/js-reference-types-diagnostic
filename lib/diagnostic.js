'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function () {
  for (var i = 0; i < words.length; i++) {
    normalizedWords[i] = words[i].toUpperCase()
  }
return normalizeWords

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  for (var i = 0; i < normalizedWords.length; i++) {
    if uniqueWords [normalizedWords[i]] === undefined {
    uniqueWords[normalizedWords[i]] = 1
  } else {
    uniqueWords[normalizedWords[i]]++
  }
}
return uniqueWords

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string) {
  function WordCount(str) {
  return str.split(" ").length;
}
}

return wordCount
// not sure how to provide an option to count the uniqueWord

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  //
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
