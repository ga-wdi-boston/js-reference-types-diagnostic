'use strict'
// Comfort: 3.5
// Clarity: 4

// I used prior class documents, Google, induction, and my memory to help with this assessment.*/


// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

// "Muh muh muh muh muh muh meow"

let lisaString = "skdj*#&$#*($*&#*$&#sdkfjdkfdjsdwekfekfjekfje   welrkwjekrjwlsk*$&*#$&{}#*woeifjeifje#&$alkdjfaksdjfkdsjfadfj)"

const normalizeWords = function (paragraph) {
  let myArray = paragraph.split(" ")
  let myUpperArray = myArray.toUpperCase()
  let myCleanArray = myUpperArray.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  return myCleanArray
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (myCleanArray) {
  let uniqueArray = []
  for (let i = 0; i < myCleanArray.length; i++){
    uniqueArray[i] = myCleanArray[i].count()
    return uniqueArray
  }
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (myCleanArray) {
  let totalNoWords = myCleanArray.length
  return totalNoWords
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
