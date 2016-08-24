'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  words.split(/\s+/);
 console.log("words is ", normalizeWords);
 };


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {
normalizedWords [i] = words[i].replace(/\W+/,'').toUpperCase();
  /* your response here */
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (str) {
  let total= 0;
  for (let i = 0; i < wordCount.length; i++)
  if(str(i) === " "){ // if a space is found in str
      total = +1; // add 1 to total so far
  }
  total += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
};
console.log(wordCount("Random String"));
// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
