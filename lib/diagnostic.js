'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) { // this function will require an input of strings
  let arryOfWords = text.split(' ') // this will create the arry of words from a string
  let normalizeWordsArray = [] // this will instantiate the array - forgot if this needs to be done ahead of time or can be done when assigning the array
  for (let i = 0; i < arryOfWords.length; i++) { // this will create a loop to go through the array and manipulate the words
    let word = words[i].replace(/\W+/, '') // this will remove non-word characters
    normalizeWordsArray[i] = word.toUpperCase() // this will turn the words in the array into uppercase therefore normalizing them
  }
  return normalizeWordsArray // returns normalizedWords so thte array can be used outside fo the function
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (text) { // this function will require an input of strings
  let uniqueWordsAsKeys = {} // creates an empty array - forgot if this really needs to be staged ahead of time or can be done when assigning values to the object
  let normalizedWordsArray = normalizedWords (text) // this calls the first function that normilized words into an array and assigns it to a variable - not sure if redundant since the 'normalizedWordsArray' was returned in the first function
  for (let i = 0; i < normalizedWords.lenth; i++) { // goes through the array
    let word = normalizedWordsArray[i]
    uniqueWordsAsKeys[word] = true // adds a boolean value of true to each unique word which is now a key in an object
  }
  return Object.keys(uniqueWordsAsKeys) // returns the object and keys for use outside of this funciton
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (text, unique) { // this funciton takes input for two paramaters, the words and its unique status
  let getWords = unique ? getUniqueWords : getNormalizedWords // if the words are unqiue, assign it to this variable
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
