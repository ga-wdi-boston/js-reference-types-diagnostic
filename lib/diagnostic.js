'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function normalizeWords(stringInput) {
  let wordList = stringInput.toString().split(/\s+/);
  for(let i=0; i<wordList.length; i++){
    wordList[i] = wordList[i].replace(/\W+/, '').toUpperCase();
  }
  return wordList;
};


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function uniqueWords(stringInput) {
  let uniqueWords = {};
  let normalizedWordsList = normalizeWords(stringInput);
  for(let i = 0; i < normalizedWordsList.length; i++){
    let key = normalizedWordsList[i];
    // console.log(key);
    uniqueWords[key] = 1;
  }
  // console.log('uniqueWords: ', uniqueWords);
  let uniqueWordsKeys = Object.keys(uniqueWords);
  console.log('uniqueWordsKeys: ', uniqueWordsKeys);
  return uniqueWordsKeys;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(stringInput, uniqueTrueBool) {
  if(uniqueTrueBool){
    return uniqueWords(stringInput).length;
  }else{
    return normalizeWords(stringInput).length;
  }
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function wordFrequencies(stringInput) {

  let keyList = uniqueWords(stringInput);
  let keyCount = keyList.length;
  let normWords = normalizeWords(stringInput);
  let normWordsCount = normWords.length;
  let wordFrequenciesDict = {};
  console.log(keyList, keyCount, normWords, normWordsCount, wordFrequenciesDict);

  for(let i=0; i < keyCount; i++){
      wordFrequenciesDict[keyList[i]] = 0;
  }

  console.log('wordFrequenciesDict: ', wordFrequenciesDict);

  for(let j=0; j < keyCount; j++){
    for(let k=0; k < normWordsCount; k++){
      console.log('Initial: ', keyList, wordFrequenciesDict[keyList[j]]);
      if(normWords[k] === keyList[j]){
        console.log('Added 1!');
        wordFrequenciesDict[keyList[j]] += 1;
      }
      console.log('Final  : ', keyList, wordFrequenciesDict[keyList[j]]);
    }
  }

  return wordFrequenciesDict;
};

// Test
let string = "'test test TEST why WHY hi'";
let testNormalizeWords = normalizeWords(string);
let testUniqueWords = uniqueWords(string);
let testTrueWordCount = wordCount(string, true);
let testFalseWordCount = wordCount(string, false);
let testWordFrequencies = wordFrequencies(string);

console.log('string: ', string);
console.log('testNormalizeWords: ', testNormalizeWords);
console.log('testUniqueWords: ', testUniqueWords);
console.log('testTrueWordCount: ', testTrueWordCount);
console.log('testFalseWordCount: ', testFalseWordCount);
console.log('testWordFrequencies: ', testWordFrequencies);

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
