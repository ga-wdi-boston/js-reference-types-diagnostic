'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const paragraph = 'Good morning. In less than an hour, aircraft from here will join others from around the world. And you will be launching the largest aerial battle in the history of mankind. “Mankind.” That word should have new meaning for all of us today. We can’t be consumed by our petty differences anymore. We will be united in our common interests. Perhaps it’s fate that today is the Fourth of July, and you will once again be fighting for our freedom… Not from tyranny, oppression, or persecution… but from annihilation. We are fighting for our right to live. To exist. And should we win the day, the Fourth of July will no longer be known as an American holiday, but as the day the world declared in one voice: We will not go quietly into the night! We will not vanish without a fight!  We’re going to live on! We’re going to survive! Today we celebrate our Independence Day!'
let words = paragraph.split(' ');
const normalizeWords = function (paragraph) {
  for (var i = 0; i < words.length; i++) {
    normalizeWords[i] = words[i].toUpperCase()
  }
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWordsAsKeys = {}
const uniqueWords = function (paragraph) {
  for (var i = 0; i < normalizeWords.length; i++) {
    if (uniqueWordsAsKeys[normalizedWords[i]] === undefined) {
      uniqueWordsAsKeys[normalizeWords[i]] = 1
    } else {
      uniqueWordsAsKeys[normalizeWords[i]]++
}
}
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
