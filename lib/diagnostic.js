'use strict';
//add comment for fist to five
// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(/\s+/);

  let normalizedWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = words[i].replace(/\W+/, '');
      normalizedWords[i] = word.toUpperCase();
    }

  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (paragraph) {
  let normWords = normalizeWords(paragraph);

  let uniqueWordsAsKeys = {};
    for (let i = 0; i < normWords.length; i++) {
      let word = normWords[i];
      uniqueWordsAsKeys[word] = true;
    }

  // The keys pulled out into a list
  let uniqueWords = [];
  let keys = [];
  let k=0;

  for (keys[k++] in uniqueWordsAsKeys);

  uniqueWords = keys;
  return uniqueWords;
};
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (paragraph, countUnique) {
  let normWords = normalizeWords(paragraph);
  if (countUnique !== true) {
    return normWords.length;
    } else {
    let uniqueDict = {};
    let count = 0;

    for (let i = 0; i < normWords.length; i++) {
      if (uniqueDict[normWords[i]] !== undefined) {
        count++;
      } else {
        uniqueDict[normWords[i]] = true;
      }
    }
    return count;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (paragraph) {
  let normWords = normalizeWords(paragraph);

  let uniqueDict = {};

  for (let i = 0; i < normWords.length; i++) {
    if (uniqueDict[normWords[i]] !== undefined) {
      uniqueDict[normWords[i]] += 1;
    } else {
      uniqueDict[normWords[i]] = 1;
    }
  }
  return uniqueDict;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
