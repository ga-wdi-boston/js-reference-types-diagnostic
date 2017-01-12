'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let words = string.split(' ');

  return (words.map((word) => {
      return word.toUpperCase().replace(/\W+/, '');

  }));
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {

//I struggled with this lab last night, so I am going to attempt to pseudo-code
//with my time left and then do as much of the code as possible because I think
// that is the best use of my time. We want to store
// each instance of a word, which will store as a key that only appears one time
// We are taking each instance of a normalized word in the string and checking an assigned
//value for the number of times it appears. If it is 1 we push it to the unique words array.

let uniqueWords = [];
let keys = [];
let k = 0;

let normalizedWords = getNormalizedWords(string);


for (let i = 0; i < normalizedWords.length; i++) {
  if ()
  uniqueWords.push(normalizedWords);
}

  return uniqueWords;
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.



const wordCount = function (string) {

  //We would just take the two previous functions that should give us arrays of normalizedWords
  // and unique words and run the .length methods on them.

};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  /* your response here */
  // Most of the work of this function should be done, because we already have the counts
  //and key value pairing done in the uniqueWords function.

  const addOne = function (num) {
    return (num || 0) + 1;

  };

  for ( let i = 0; i < normalizedWords.length; i++){
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
