'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let words = string.split(/\s+/);
  return(words.map((word)=>{
    return word.toUpperCase().replace(/\W+/,'');
  }));

};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let uniqueWordsAsKeys = {};
  let normalizedWords =normalizeWords(string);
  for (let i=0;i<normalizedWords.length; i++){
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word]=true;
  }
  let keys = [];
  let k =0;
  for (keys[k++]in uniqueWordsAsKeys); //jshint ignore:line
  return keys;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string, option=false) {
  if(option===true){
    return uniqueWords(string).length;
  }else{
    return normalizeWords(string).length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  let wordFrequencies = {};
  let normalizedWords =normalizeWords(string);
  const addOne = function (num) {
    return (num||0)+1;
  };

  for (let i=0; i<normalizedWords.length;i++) {
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
