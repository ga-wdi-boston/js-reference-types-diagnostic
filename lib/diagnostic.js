'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let paragraph = "the boy was heading to the movies. He really likes movies. Do you like movies? I know I like movies.";

let words = [];
const normalizeWords = function (myString) {
  words = myString.split(" ");
  let normalized = words.map(function(x){

    return x.toUpperCase().replace(/[.,\/#!$%\^&\*;':{}=\-_`~()]/g,"")

  });
  return normalized;
};


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
let myArray = [];
const uniqueWords = function (anotherString) {
  let normal = normalizeWords(anotherString);
  for (let i = 0; i < normal.length; i++) {
    for (let j = i + 1; j < normal.length - 1; j++) {

      if (normal[i] !== normal[j])
      myArray.push(normal[i]);
    }
  }
  return myArray
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (paragraph) {
    let words = normalizeWords(paragraph)
    return words.length;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

// module.exports = {
//   normalizeWords,
//   uniqueWords,
//   wordCount,
//   wordFrequencies,
// };
