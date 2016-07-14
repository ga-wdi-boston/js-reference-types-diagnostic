'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (p) {
  //splits the paragraph into words
 let w = p.split(/\s+/);

 //removes special char and makes uppercase
 let nw = [];
 for (let i = 0; i < w.length; i++) {
   nw[i] = w[i].replace(/\W+/, '').toUpperCase();
 }

 return nw;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (p) {
  let normWords = [];
  normWords = normalizeWords(p);

  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normWords.length; i++) {
    let words = '';
    words = normWords[i];
    uniqueWordsAsKeys[words] = '';
  }
  let uniqueWords = Object.keys(uniqueWordsAsKeys);
  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (p, bool) {
  if(bool) {
    let uniqueWordsAsKeys = {};
    uniqueWordsAsKeys = uniqueWords(p);
    let uniqWords = Object.keys(uniqueWordsAsKeys);
    let numWords = uniqWords.length;
    //console.log(numWords);
    return numWords;
  }
  else {
    let normWords = [];
    normWords = normalizeWords(p);
    let numWords = normWords.length;
    //console.log(numWords);
    return numWords;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const addOne = function(num){
  if (num){
    return num + 1;
  }
  else{
    return 1;
  }
};

const wordFrequencies = function (p) {
  let normWords = [];
  normWords = normalizeWords(p);

  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normWords.length; i++) {
    let words = '';
    words = normWords[i];
    uniqueWordsAsKeys[words] = addOne(uniqueWordsAsKeys[words]);
  }
  return uniqueWordsAsKeys;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
