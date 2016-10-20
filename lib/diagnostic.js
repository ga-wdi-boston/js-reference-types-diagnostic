'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words)
{
  let wordsArr = words.split(/\s+/);
  console.log(wordsArr);
  for(let i = 0; i < wordsArr.length; i++)
  {

    wordsArr[i] = wordsArr[i].replace(/\W+/, "").toUpperCase();
    console.log(wordsArr[i]);
  }
  return wordsArr;
};


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words)
{
  let wordsArr = words.split(/\s+/);
  let wordsDic = {};
  console.log(wordsArr);
  for(let i = 0; i < wordsArr.length; i++)
  {

    wordsArr[i] = wordsArr[i].replace(/\W+/, "").toUpperCase();
    console.log(wordsArr[i]);
    wordsDic[wordsArr[i]] = true
  }
  return wordsDic;
};



// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (words, unique)
{
  let wordsArr = words.split(/\s+/);
  let wordsDic = {};
  console.log(wordsArr);
  for(let i = 0; i < wordsArr.length; i++)
  {

    wordsArr[i] = wordsArr[i].replace(/\W+/, "").toUpperCase();
    console.log(wordsArr[i]);
    wordsDic[wordsArr[i]] = true
  }
  if(unique)
  {
      return Object.keys(wordsDic).length;
  }
  else
  {
    return wordsArr.length;
  }
};


// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (words)
{
  let wordsArr = words.split(/\s+/);
  let wordsDic = {};
  console.log(wordsArr);
  for(let i = 0; i < wordsArr.length; i++)
  {

    wordsArr[i] = wordsArr[i].replace(/\W+/, "").toUpperCase();
    console.log(wordsArr[i]);
    wordsDic[wordsArr[i]] = wordsDic[wordsArr[i]]+1 || 1;
  }
  return wordsDic;

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
