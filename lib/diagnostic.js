'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (word) {
  return word.replace(/\W+/,'').toUpperCase();
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (array) {
  /* your response here */
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (word) {
  if (wordFrequencies[word]) {
      wordFrequencies[word] +=1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (word) {
  if (wordFrequencies[word]) {
      wordFrequencies[word] +=1;
    } else {
      wordFrequencies[word] = 1;
    }
  });
};
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
