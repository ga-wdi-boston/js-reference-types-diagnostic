'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (xstring) {

  let words = xstring.split(" ");
  let normwords = words.replace(/\W/, ' ').toUpperCase();
  return normwords;

};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (xstring) {
  let words = xstring.split(" ");
  let normwords = words.replace(/\W/, ' ').toUpperCase();

  return unormwords = Object.key(normwords);

};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function () {

  const uniqueWords = function (xstring) {
    let words = xstring.split(" ");
    let normwords = words.replace(/\W/, ' ').toUpperCase();
    let count = 0;
    for (i === 0; i < normwords.length; i ++)
    {
      count +=1;
      return count;
    }

}

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (xstring) {

    let words = xstring.split(" ");
    let normwords = words.replace(/\W/, ' ').toUpperCase();

    return unormwords = Object.key(normwords);

  };

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
