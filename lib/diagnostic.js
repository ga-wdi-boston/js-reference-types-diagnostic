'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let paragraph = 'Hello.  Is there anybody in there?  Just nod if you can hear me.  Is there anyone at home?';

const normalizeWords = function (paragraph) {
  let normalizedWords = [];
  normalizedWords = paragraph.replace(/\W+/g, ' ').toUpperCase();

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  let uniqueWords = [];
  uniqueWords = Object.keys(uniqueWordsAsKeys(paragraph));

  return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.

const wordCount = function (paragraph) {
  let normalizedWords = normalizeWords(paragraph);
  let count = normalizedWords.length();

  return count;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the value for that key
const uniqueWordsAsKeys = function (paragraph) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = normalizeWords(paragraph);
  for (let i = 0; i < normalizedWords.length; i++) {
    uniqueWordsAsKeys[normalizedWords[i]] = false;
  }
  return uniqueWordsAsKeys;
};


const wordFrequencies = function (paragraph) {
  /* your response here */
  let normalizedWords = normalizeWords(paragraph);
  let wordFrequencies = uniqueWordsAsKeys(paragraph);

  for (let i = 0; i < normalizedWords.length; i++) {
    if (normalizedWords[i] in wordFrequencies) {
      wordFrequencies[normalizedWords[i]] += 1;
    }
  }

  return wordFrequencies;
};
console.log(normalizeWords(paragraph));
console.log(uniqueWords(paragraph));
console.log(wordCount(paragraph));
console.log(uniqueWordsAsKeys(paragraph));
console.log(wordFrequencies(paragraph));


module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
