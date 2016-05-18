'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  let wordArray = words.split(' ');
  const normalize = function (word) {
    return word.replace(/\W+/,'').toUpperCase();
  };
return wordArray.map(normalize);
};
// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (array) {
  let result = {};
  array.forEach(function (word) {
    result[word] = 0;
  });
    //take each value in the array
  return result;};

// 3. Write a function that returns the count of words in a string.
// Provide the *option* to count unique words instead of total words.
const wordCount = function (stringOfWords, countUnique) {
  if(countUnique) {
    let arrayOfWords = normalizeWords(stringOfWords);
    let uniqueCount = uniqueWords(arrayOfWords);
    return uniqueCount.length;

  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function (array) {
  normalizedWords.forEach(function (word) {
    if(wordFrequencies[word]) {
      wordFrequencies[word] += 1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
/* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
