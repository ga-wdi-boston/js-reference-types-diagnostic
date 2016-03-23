'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function getNormalizedWords(text) {
  let words = text.split(/\s+\);
  let normalizeWords = [];
  for (let i = 0; i < words.length; i++) {
    normalizeWords[i] = words[i].replace(/\W+/,'').toUpperCase();
  }
  return normalizedWords;
};
//**copied from yesterday. don't actually understand.

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const uniqueWords = uniqueWords (text) {
  let normalizedWords = getNormalizedWords(text);
  let uniqueWordsAsKeys= {};
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  let uniqueWords = Object.keys(uniqueWordsAsKeys);
  return uniqueWords;
};
//**copied from yesterday. don't actually understand.

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = wordCount(count, option) {
  if(option === true){
    return getUniqueWords(count).length;
  }
  else {
    return getNormalizedWords(count).length;
  }
}
;
//**copied from yesterday. don't actually understand.

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = wordFrequencies (count, option) {
  if(option === true){
    return 
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
