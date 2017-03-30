'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {


function returnSplitString(string){
   return string.split(" ");

}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {

  for (var i = 0; i < normalizedWords.length; i++) {
  if (uniqueWordsAsKeys[normalizedWords[i]] === undefined) {
    uniqueWordsAsKeys[normalizedWords[i]] = 1
  } else {
    uniqueWordsAsKeys[normalizedWords[i]]++
  }
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {

  function WordCount(str) {
  let totalSoFar = 0;
  for (let i = 0; i < WordCount.length; i++)
    if (str(i) === " ") {
      totalSoFar = +1;
  }
  totalsoFar += 1;

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
