'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (stringArray) {
 let seperatedWords = stringArray.split(' ');
 let normalizedWords = seperatedWords.map((word)=>{
   return word.toUpperCase().replace(/\W+/,'');
 });
return  normalizedWords;

};


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (stringArray) {
   let seperatedWords = stringArray.split(' ');
   let normalizedWords = seperatedWords.map((word)=>{
     return word.toUpperCase().replace(/\W+/,'');
   });

   let uniqueWordsAsKeys = {};
   for(let i = 0; i < normalizeWords.length; i++){
     let word = normalizedWords[i];
     uniqueWordsAsKeys[word] = true;
   }
   let uniqueWord = [];
   let keys = [];
   let k = 0;
   for(keys[k++] in uniqueWordsAsKeys){
      uniqueWord = keys;
   }
   uniqueWord = keys;
   return uniqueWord;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {

};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
