'use strict'

// Reuse functions wherever possible.
let paragraph = "the quick brown fox jumped over the fence the quick brown fox jumped over"
let normalArray = []
// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const words = paragraph.split(" ")
const normalizeWords = function (wordArray) {
  for (var i=0; i < wordArray.length; i++) {
    normalArray[i] = wordArray[i].toUpperCase()
  }
};
normalizeWords(words);
console.log(normalArray)

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (normalArray) {
  for (let i=0; i < normalArray.length; i++) {
    if (uniqueWords[normalArray[i]] !== undefined) {
      uniqueWords[normalArray[i]]++
    } else {
      uniqueWords[normalArray[i]] = 1
    }
  }
};
uniqueWords(normalArray);
console.log(uniqueWords)

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

let numWords = 0;
const wordCount = function (anyObject) {
  for (let key in anyObject) {
    numWords = numWords + 1
  }
};
wordCount(uniqueWords);
console.log(numWords)
// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (anyObject) {
  for (let key in anyObject) {
    console.log(anyObject[key] + anyObject[1])
  }
};
wordFrequencies(uniqueWords);
console.log(wordFrequencies)


module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
