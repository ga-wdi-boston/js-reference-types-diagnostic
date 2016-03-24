'use strict';

// Reuse functions wherever possible.
const addOne = (num) => (num || 0 ) + 1;
// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (text) {
  let words = text.split(/\s+/);
  //split returns array to words
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    normalizedWords[i] = word.replace(/\W+/, '').toUpperCase();
  }

  return normalizedWords;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const wordFrequencies = function (text) {
// creates dictionary
  let wordDictionary = {};
  let normalizedWords = normalizeWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
  //^helper line.... simplifies
  // addOne records count of each word and will create new instance if needed
  wordDictionary[word] = addOne(wordDictionary[word]);
}

  return wordDictionary;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = function (text) {
  let wordDictionary = wordFrequencies(text);
  let keys = [];
//for in loop! Learn this shit!!
// for (variable in object) === for (key in dictionary)
  for (let prop in wordDictionary){
    keys.push(prop);
  }
  return keys;
};

// 3. Write a function that returns the count of words in a string.
// Provide the *option* to count unique words instead of total words.
const wordCount = function (text, unique) {
  let count = null;
  if(!unique){
    count = normalizeWords(text).length;
  }else if(unique){
  count = uniqueWords(text).length;}
return count;
};



module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
