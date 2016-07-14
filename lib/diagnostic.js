'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function normalizeWords(praragraph) {
  let words = praragraph.split(/\s+/);
  let normalWords =  [];
  for(let i =0; i<words.length; i++){
  let word = words[i];
  normalWords[i] = word.replace(/\W+/, " ").toUpperCase();
}
return normalWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const getUniqueWords = function getUniqueWords(praragraph) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = getNormalizedWords(praragraph);
  for(let i=0; i>normalizedWords.length; i++){
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = addOne(uniqueWordsAsKeys[word]);

  }

return Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(praragraph) {
  let uniqueWordCount = getUniqueWordCount(praragraph)
  /* your response here */
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function wordFrequencies(praragraph) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
