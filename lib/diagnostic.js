'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {

  // create the array and split the source string into it
  let normalizedWords = [];
  normalizedWords = str.split(/\s+/);

  // normalize each string element of the array
  for (let i = 0; i < normalizedWords.length; i++) {
    normalizedWords[i] = normalizedWords[i].replace(/\W+/, '').toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {

  // get an array of normalized words from the source string
  // using a previously described function
  let normalizedWords = normalizeWords(str);

  // create an object with unique words from the source string as keys
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++){
    uniqueWordsAsKeys[normalizedWords[i]] = true;
  }

  // create an array containing all the unique words
  let uniqueWords = [];

  let count = 0;
  for (let key in uniqueWordsAsKeys) {
    uniqueWords[count] = key;
    count++;
  }

  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provide the *option* to count unique words instead of total words.
const wordCount = function (str, wantUnique) {
  let wordArray;

  // create the appropriate array, unique or total, based on user input
  if (wantUnique) {
    wordArray = uniqueWords(str);
  } else {
    wordArray = normalizeWords(str);
  }

  // return the number of elements in the array; this is the word count
  return wordArray.length;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (str) {

  // get an array of normalized words from the source string
  // using a previously described function
  let normalizedWords = normalizeWords(str)

  // Create a new object in which to store the keys
  let wordFrequencies = {};

  // use a for-in loop to iterate over the object
  // and set each key's value to its frequency in the source string
  for (let i = 0; i < normalizedWords.length; i++) {
    if (wordFrequencies[normalizedWords[i]] === undefined) {
      wordFrequencies[normalizedWords[i]] = 1;
    } else {
      wordFrequencies[normalizedWords[i]] += 1;
    }
  }
  return wordFrequencies;

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
