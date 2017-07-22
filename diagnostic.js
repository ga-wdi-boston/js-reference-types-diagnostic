'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {
  ==============
  theString = theString.toUpperCase();
  ============
  var str = 'shoot for dah moon partner';
  function toUpperCase(str) {
    return str.toUpperCase();}
  console.log(toUpperCase(str));

}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
==========================
  let stringList = {
    'sit': 'am',
    'school':'beach',
    'one': 'summer',
    'Shoe': 'Never',
    'two': 'Shirt',
    'phone': 'man',
    'three': 'Hat',
    'time': 'love',
    'four': 'Style',
    'burgers': 'me'
  };

  const message = 'I sit at the school to imagine at one with a phone to hope for the time someday for burgers.';

  function translate(message) {
    return message.replace(/sit|school|one|Shoe|two|phone|three|time|four|burgers/g, match => stringList[match]);
  };

  console.log(translate(message));
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
===========
//if using a function, this. needs to apply to the function not =>
//if bloc not global
=============
///Answer:
console.log([false,true,true,false,true,false,true].filter(v => v).length);
//pulls true values vs false it filters
// the number of true value stays 4
//out of 7}
or
const wordCount = [true,true,true,true,true].length;
console.log(wordCount);
//total 5 is the number

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  ===============================
  ///Answer
const wordCount = [true,true,true,true,true];

console.log(wordCount);
  //5 is the number}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
