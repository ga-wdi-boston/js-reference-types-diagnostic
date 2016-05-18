'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (stringArg) {
  let wordArray = stringArg.split(' ');
  let normalizeWord = function(word) {
    return word.toUpperCase().replace(/\W/,'');
  }
  let normalizedWordArray = wordArray.map(normalizeWord);

  })
  return normalizedWordArray;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (stringArg) {
  const getUniqueWords = function getUniqueWords(stringArg) {
  let UniqueWordsArray = [];
  let normalizedWordArray = getNormalizedWords(stringArg);
  for (let i = 0; i < normalizedWordArray.length; i++) {
    if (UniqueWordsArray.includes(normalizedWordArray[i])) {
      continue;
    }else {
      UniqueWordsArray.push(normalizedWordArray[i]);
    }
  }
  return UniqueWordsArray;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (stringArg) {
  let count = getNormalizedWords(stringArg).length;
  let uniCount = getUniqueWords(stringArg).length;
  return uniCount;
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (stringArg) {
  let uniMap = {};
  let normalWordsArray = normalizeWords(stringArg);
  uniMap = normalWordsArray.forEach(function(element) {
    if(uniMap.has(element)) {
      uniMap[element]++;
    }else {
      uniMap[element] = 1;
    }
  });
  return uniMap;
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
