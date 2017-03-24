'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

  const str = "To guild refined gold. To throw perfume on the lilly."
  let normalizedWords = []
  let noPunct =""

  const getNormalizedWords = function () {

    let noPunct = str.replace(/[^A-Za-z0-9_]/g," ")

    let normalizedWords = noPunct.split(",")

    for (let i = 0; i < normalizedWords.length; i++) {
      normalizedWords[i]= normalizedWords[i].toUpperCase()
    }return normalizedWords
  }



// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const str = "To guild refined gold. To throw perfume on the lilly."
let normalizedWords = []
let noPunct =""

const uniqueWords = function () {
  let noPunct = str.replace(/[^A-Za-z0-9_]/g," ")

  let normalizedWords = noPunct.split(",")
//I'm trying to create 2 arrays that will compare to eachother and if
//!= will store the unique vaues in an array.
  for (let i = 0; i<normalizedWords.length; i++) {
    for (let j = i +1; j < normalizedWords.length; j++)
      if(i != j){
        normalizedWords[i] = normalizedWords[i].toUpperCase()
      } return normalizedWords
  }
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

let str = "Shakespeare is cool"
const wordCount = function () {

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
