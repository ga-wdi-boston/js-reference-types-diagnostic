'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {
  let words = str.split(" ");
  let upCasedWords = [];
  for(let i=0;i<words.length;i++){
    upCasedWords[i]=words[i].toUpperCase().replace(/\W+/, '');
  }
  return upCasedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {
  let words = normalizeWords(str);
  let uniqWords= {};
  for(let i=0;i<words.length;i++){
    let word = words[i];
    uniqWords[word] = true;
  }
  let keys = {};
  let k = 0;
  for (keys[k++] in uniqWords); //jshint ignore:line
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
  let count = {};
  for(let i=0; i<words.length;i++){
    let word = words[i];
    if (count[word]===undefined){
    count[word] = 1;
  } else {
    count[word] = count[word]+1;
  }
}
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
