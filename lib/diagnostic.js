'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let words = paragraph.split(' ');
  return words;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {
  let normalizedWords = words.map((word)=>{
  return word.toUpperCase().replace(/\W+/,'');
});
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (normalizedWords, option) {
let uniqueWordsAsKeys = {};
for(let i = 0; i < normalizedWords.length; i++){
let word = normalizedWords[i];
  uniqueWordsAsKeys[word] = true;
}
};
let uniqueWord = [];
let keys = [];
let k = 0;
for (keys[k++] in uniqueWordsAsKeys);
uniqueWord = keys;

let wordFrequency = {};

const addOne = function(num){
  return(num || 0) + 1;
};

for (let i = 0; i < normalizedWords.length; i++){
  let word = normalizedWords[i];
  wordFrequency[word] = addOne(wordFrequency[word]);

}


if(normalizeWords === "normalizedWords"){
  let firstAnswer = uniqueWord.length;
  return firstAnswer
}else if (option === "option"){
  let secondAnswer = wordFrequency.length;
  return secondAnswer;
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
