'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const normalizeWords = function (text) {
  let splitWords = text.split(/\s+/);
  for(let i = 0; i < splitWords.length; i++) {
    let word = splitWords[i]
    splitWords[i] = word.replace(/\W+/, '').toUpperCase();
  }
  return splitWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const uniqueWords = function (text) {
  let uniqueWordObject = {};
  let normalizedWords = normalizeWords(text);
  let uniqueWordArray = [];
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWordObject[normalizedWords[i]] = "";
  }
  for (var key in uniqueWordObject) {
    uniqueWordArray.push(key);
  }
  return uniqueWordArray;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (text, unique) {
  if (unique && text) {
    return uniqueWords(text).length;
  }
  else {
    return normalizeWords(text).length;
  }
};

let addTo = function (number) {
  if (number) {
    return number += 1;
  }
  else {
    return number = 1;
  }
};
// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (text) {
  let uniqueWordObject = {};
  let normalizedWords = normalizeWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWordObject[normalizedWords[i]] = addTo(uniqueWordObject[normalizedWords[i]]);
  }
  return uniqueWordObject;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
