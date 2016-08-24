'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {

  let words = [];
  words =  paragraph.split(/\s+/);
};

for (let i = 0; i< words.length; i++){
normalizedWords [i] = words[i].replace(/\W+/,'').toUpperCase();

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {

  let uniqueWordsAsKeys = {};

  for (let i=0; i< normalizedWords.length; i++){

  uniqueWordsAsKeys[normalizedWords[i]] = true;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (/* */) {

  let wordFrequencies = {};

for(let i = 0; i < normalizedWords.length; i++){
  if(wordFrequencies[normalizedWords[i]]) === undefined){
    wordFrequencies[normalizedWords[i]] = 1;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {};

// Unsure of how to begin this function

// Hey Chris, Brian, Jeff:
// I really floundered with this diagnostic and basically just copied
// and pasted functions we did earlier with the Constitution. I know
// they had to be altered to answer the questions in this assignment,
// but I really wasn't able to attempt this in the time allotted. I know
// I have a lot of reading and practicing to do this weekend on arrays
// and JS basics. I promise I'll keep working really hard and won't let you
// guys down! I'm determined to learn this stuff. --Lauren.


module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
