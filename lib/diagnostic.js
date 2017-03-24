'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

let normalizeWords = []
let stringNoPunctuation = []

const normalizeWords = function () {
  for(let i = 0; i < string.length; i++){     //Assuming the list of words is in an aray called "string"
    normalizeWords[i] = string[i].toUpperCase()     // Turns the string without punctuation into all caps.
    stringNoPunctuation = normalizeWords.replace(/[^A-Za-z0-9_]/g,"")     // Removes punctuation from normalized words.
  }
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

// First we assign each word in a string as keys and essentially counts how many times a word is in the string.
let uniqueWordsAsKeys = {}

const uniqueWords = function () {
  for(let i = 0; i < normalizeWords.length; i++) {
    if(uniqueWordsAsKeys[normalizeWords[i]] !== undefined){
      uniqueWordsAsKeys[normalizedWords[i]]++
    } else {
      uniqueWordsAsKeys[normalizedWords[i]] = 1
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

// Definitely the toughest diagnostic so far.
// I don't think it's because I don't understand the concepts,
// because when I follow along in class it seems to make sense to me.
// But it will probably just take extra examples and extra practice
// before all of this becomes second nature to me. I think if I had more time to
// do this, I will def figure this out.

}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
