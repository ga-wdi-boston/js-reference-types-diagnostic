'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(/\s+/);
  let normalizedWords = [];

  for (let i = 0; i < words.length; i++){
    let word = words[i].replace(/\W+/, '');
    // replacing all lowercase letters with upper case letters
    normalizedWords[i] = word.toUpperCase();
  }

  return normalizedWords;

};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {

  let normalizedWords = normalizeWords(paragraph);
  let uniqueWordsAsKeys = {};

  for (let i = 0; i < normalizedWords.length; i++) {

    // loop through normalizedWords
    // put each unique element into uniqueWordsAsKeys object
    let word = normalizedWords[i];

    uniqueWordsAsKeys[word] = true;
  }

  let uniqueWords = [];
  let k = 0;

  for(uniqueWords[k++] in uniqueWordsAsKeys);

  return uniqueWords;

};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (paragraph, unique) {

  unique = (unique || false);

  if (!unique){
    let normalizedWords = normalizedWords(paragraph);
    return normalizedWords.length;
  } else {
    let uniqueWords = normalizeWords(paragraph);
    return wordFrequencies.length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (paragraph) {
  let dictionary = {};

  let unique = uniqueWords(paragraph);

  for (let i = 0; i < unique.length; i++){
    let word = unique[i];

    if (dictionary[i] === true){
      dictionary[i] = 1;
    } else {
      dictionary[i] += 1;
    }

  }

  return dictionary;
};

console.log("dictionary = " + uniqueWords("Hello there, hello, what's up, hello"));

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
