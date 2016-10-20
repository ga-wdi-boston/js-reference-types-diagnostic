'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let stringArray = string.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < stringArray.length; i++) {
    let word = stringArray[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let normalizedWords = normalizeWords(string);
  // create object of unique words
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  // pull unique words out of object into array
  let uniqueWords = [];
  let k = 0;
  for(uniqueWords[k++] in uniqueWordsAsKeys); // jshint ignore:line
  return uniqueWords;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string, unique) {
  unique = (unique || false);
  if (unique === true) {
    let myUniqueWords = uniqueWords(string);
    return myUniqueWords.length;
  } else {
    let normalizedWords = normalizeWords(string);
    return normalizedWords.length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const addOne = function(num){
  return (num || 0) +1;
};

const wordFrequencies = function (string) {
  let normalizedWords = normalizeWords(string);
  // create object of unique words
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  // The keys pulled out into a list
  let uniqueWords = [];
  let k = 0;
  // No .length for objects so this increments k to give us the object length.
  for(uniqueWords[k++] in uniqueWordsAsKeys); // jshint ignore:line
  // The words as keys and the values the count of each word
  let wordFrequencies = {};
  //grab a word from normalizedWords and add it as a key to wordFrequencies then
  //run its value through the addOne function. to start this will be undefined
  //so 0 will be used
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }

  return wordFrequencies;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
