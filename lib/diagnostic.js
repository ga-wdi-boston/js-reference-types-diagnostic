'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (str) {
  let result = str.toUpperCase();

  return st.split(" ");

// still need to remove punctuation


};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (str) {

strArr = normalizeWords(str);
strArr.filter();

//need to remove dups

  /* your response here */
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (str,unq) {

let strArr=[];
if (unq === undefined) {
  strArr = normalizeWords(str);
} else {
  strArr = uniqueWords(str);
}
return strArr.length;

};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (str) {

let strArr = [];
let strArrAll = [];

dic {

};

strArrAll = normalizeWords(str);
strArr = uniqueWords(str);

for (let i=0;i<strArr.length;i++){
  dic[strArr[i]] = 0;
}

//get word counts

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
