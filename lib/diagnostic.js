'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const para = 'THIS is a TEST TEST TEST ///... SENT cannnot figure GRUNTIT WORKS IF yOu paSTE inTO nODE'
let normalizedWords = []

const normalizeWords = function (test) {
  let words = test.split(/\s+/);
  console.log(words)
  for (let i = 0; i < words.length; i++){
    const word = words[i].replace(/\W+/, '')
    normalizedWords[i] = word.toUpperCase()
  }
  console.log(normalizedWords);
}
const testForUniqe = normalizeWords(para)

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let uniqueWordsAsKeys = function(test) {
  for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords[i];
  uniqueWordsAsKeys[word] = true;
}
console.log(uniqueWordsAsKeys);
}
normalizeWords(normalizedWords)

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
