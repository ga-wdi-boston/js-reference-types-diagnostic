'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (word) {
 return word.replace(/\w+/,'').toUpperCase();
};

let normalizedWords = words.map(normalize);
};

comfort : 2
clarity :3

I used class notes from yesterday afternoon.

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (uniqueWords) {
  let uniqueWordsAsKeys = function (array) {
    let result ={};
    array.forEach(function (word){
      result[word] = null;
    })

    return result;
  };
};

comfort : 2
clarity : 2

I used class notes from yesterday afternoon.

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (count) {
 let result = .count(words)
 return (' There are ' + .count + 'words.')
};

comfort : 1
clarity : 1

I used class notes from yesterday afternoon and google.

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (array){
  let wordFrequencies = function (array) {
  uniqueWords.forEach(function(word)

  })
};


comfort : 1
clairty : 1

I used google and lecture.
module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
