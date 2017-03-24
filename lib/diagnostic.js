'use strict'

let upperCaseWords = []
let uniqueWords = []
let uniqueOption

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
//Found the replace method on Google
//Also referred to my homework this week
const normalizeWords = function (words) {
  //Split out each word in the paragraph:
  let splitWords = words.split(" ")

  for (let i = 0; i < splitWords.length; i++)
  {
    upperCaseWords[i] = splitWords[i].toUpperCase().replace(/[^A-Za-z0-9_]/g,"")
    console.log (upperCaseWords[i])
  }

  return upperCaseWords
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (word) {
  /* your response here */
   let normalizedWords = normalizeWords(text)

   //Have to pseudo code as I didn't know how to loop through and get this value.
   //I would create a for loop that loops through normalizedWords
   //and then apply logic to test if it is unique. However, I'm
   //not clear on how to do this and will try over weekend

}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (words, uniqueOption) {
  /* your response here */
  let theNumberOfWords

  if (uniqueOption = true) {

  let uniqueWordsFound = uniqueWords (words)
  theNumberOfWords = uniqueWordsFound.length

} else if (uniqueOption = false) {
    let normalizedWordsFound = normalizeWords(text)
    theNumberOfWords = normalizedWordsFound.length
  }

  return theNumberOfWords;

}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  //No time to do this one.
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
