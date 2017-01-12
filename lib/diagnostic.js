'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

  const normalizeWords = (text) => text.split(/\s+/)
    .map((word) => word.replace(/\W+/, '').toUpperCase());
    return console.log(normalizeWords);

};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.


  const wordFrequencies = (text) => normalizeWords(text)
    .reduce((frequencies, word) => {
      frequencies[word] = addOne(frequencies[word]);
      return frequencies;
    }, {});
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.


const wordCount = (text, unique) => // jshint ignore: line
  unique ? uniqueWords(text).length : normalizeWords(text).length;


// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
const uniqueWords = (text) => Object.keys(wordFrequencies(text));
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
