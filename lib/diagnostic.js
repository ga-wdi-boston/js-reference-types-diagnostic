'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {
  let arr = str.split(/\s+/);
  let upCasedWords =[];
  for(let i=0;i<arr.length;i++){
    upCasedWords[i] = arr[i].replace(/\W+/, '').toUpperCase();
  }
    return upCasedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let uniqWords = {};
  for(let i=0; i<normalizeWords(str).length; i++){
    uniqWords[normalizeWords(str)[i]] = true;
  }
  let keys = [];
  let k = 0;
  for(keys[k++] in uniqWords); //jshint
  return keys;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (str, opt) {
  if (opt===true){
    return uniqueWords(str).length;
  } else {
    return normalizeWords(str).length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (str) {
  let words = normalizeWords(str);
  let countOfWords = {};
  for(let i=0; i<words.length; i++){
    if (countOfWords[words[i]]===undefined){
    countOfWords[words[i]] = 1;
  } else {
    countOfWords[words[i]] = countOfWords[words[i]] +1;
  }
  }
  return countOfWords;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
