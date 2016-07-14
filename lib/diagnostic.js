'use strict';

const paragraph = 'This is some text that will be used as string';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.


const normalizeWords = function normalizeWords (paragraph) {


  let words = paragraph.split(/\s+/);

  let normalizedWord = [];

  for (let i=0; i<words.length; i++){
    let word = words[i];
    normalizedWord[i] = word.replace(/\W+/, '').toUpperCase();
  }

  return normalizedWord;
};



// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const uniqueWords = function uniqueWords (paragraph) {

  let uniqueWordsAsKeys = {};

  let normalizedWords = normalizedWords(paragraph);

  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = '';
  }

  let uniqueWords = Object.keys(uniqueWordsAsKeys);
  return uniqueWords;
};

};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.

const wordCount = function wordCount(paragraph, bool ) {

if (bool){
  let uniqueWordsAsKeys = {};
  uniqueWordsAsKeys = uniqueWords(paragraph);

  let uniqueWords = Object.keys(uniqueWordsAsKeys);

  let numW = uniqueWords.length;

  return numW;

} else {

let normalizedWords = [];

normalizedWords = normalizedWords(paragraph);

let count = normalizedWords.length;

return count;

}

};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key

const wordFrequencies = function wordFrequencies(paragraph) {

  let uniqueWordsAsKeys = {};

  uniqueWordsAsKeys = uniqueWords(paragraph);

  let uniqueWords = Object.keys(uniqueWordsAsKeys);

  let numW = uniqueWords.length;

  return numW;

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
