'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let normalWords = [];
let unique = [];

const normalizeWords = function (string) {
  let stringSplit = string.split(/\s+/);
  for (let i = 0; i < stringSplit.length; i++){
    normalWords[i] = stringSplit[i].replace(/\W+/, '').toUpperCase();
  }
  return normalWords;
};

normalizeWords("Wow, cats sure do fail to not fail!");

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.

const uniqueWords = function (words) {
	let sorted = words.sort();

  for (let i = 0; i < sorted.length; i++){
  	if (sorted[i] !== sorted[i + 1]){
  		unique.push(sorted[i]);
  	}
  }
   	return unique;
};

uniqueWords(normalWords);
// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (notUnique, areUnique) {
  	notUnique = notUnique.length;
  	areUnique = areUnique.length;
  return "There are " + notUnique.length + " normal words and " + unique.length + " unique words.";
};

wordCount(normalWords, unique);

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
