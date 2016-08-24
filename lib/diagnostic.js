'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let wordsList=['The cat in the h/at'];

const normalizeWords = function (/* */) {

  let normalizeWordsArray = [];
  for (let i=0; i< wordsList.length; i++){
    normalizeWordsArray[i]=wordsList[i].replace(/\W+/, '').toUpperCase();
  }
  return normalizeWords;

};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  let uniqueWordsAsKeys = {};

  let uniqueNormalWordList=[];
  let count=0;

  for (let i=0; i<normalizedWords().length; i++){
    uniqueWordsAsKeys[normalizeWordsArray[i]]=true;
  }

  for (let key in uniqueWordsAsKeys) {
    uniqueNormalWordList[count] = key; //really well named key
    count++;

  return uniqueNormalWordList;
}
}

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (/* */) {
  /* your response here */
};

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
