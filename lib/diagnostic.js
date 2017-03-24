'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (sentence) {
  let stringOne = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  stringOne = stringOne.toUpperCase()
  let ArrayOfWords = stringOne.split(' ')
  return ArrayOfWords
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (sentence) {
  let stringOne = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  stringOne = stringOne.toUpperCase()
  let arrayOfWords = stringOne.split(' ')
  let specialWords = []
  for(let i=0; i<arrayOfWords.length; i++){
    if(specialWords.indexOf(arrayOfWords[i]) === -1) {
    specialWords.push(arrayOfWords[i])
    }
  }
return specialWords
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (sentence, unique) {
  let stringOne = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  stringOne = stringOne.toUpperCase()
  let arrayOfWords = stringOne.split(' ')
  if (unique){
  let specialWords = []
  for(let i=0; i<arrayOfWords.length; i++){
    if(specialWords.indexOf(arrayOfWords[i]) === -1) {
    specialWords.push(arrayOfWords[i])
    }
  } return specialWords.length
} else {
  return arrayOfWords.length
}
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (sentence) {
  // remove punctuation from string
  let stringOne = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  // turn string into uppercase letters
  stringOne = stringOne.toUpperCase()
  // split string into individual words in an array
  let arrayOfWords = stringOne.split(' ')
  // create new array for unique words
  let specialWords = []



}


module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
