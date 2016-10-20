'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let normalizedWords = [];
let getUniqueWords = [];

const normalizeWords = function ( text )
{
  let words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++)
  {
    normalizedWords[i] = words[i].replace( /\W+/, '' ).toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function ( text )
{
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++)
  {
      uniqueWordsAsKeys[normalizedWords[i]] = true;
  }

  let keys = [];
  let k = 0;


  for( keys[k++] in uniqueWordsAsKeys ); // jshint ignore:line

  getUniqueWords = keys;

  return getUniqueWords;

};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function ( text, flag )
{
  let lengthString = 0;
  if( flag === true )
  {
    lengthString = uniqueWords( text ).length;
  }
  else
  {
    lengthString = normalizeWords( text ).length;
  }
  return lengthString;
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function ( text )
{
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++)
  {
      uniqueWordsAsKeys[normalizedWords[i]] = true;
  }

  let keys = [];
  let k = 0;

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
