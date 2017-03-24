'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {

const paragraph = 'This, is. a sample paragraph.'

let words = paragraph.split(" ")

let normalized words [];    
for (let i = 0; i <words.length; i++) {
	let word = words[i].replace(/[[^a-z0-9]/gi,'')
	normalizedWords[i] = word.toUpperCase()
}
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {

const paragraph = 'This, is. a sample paragraph.'

let words = pararaph.split(" ")

let normalized words [];    
for (let i = 0; i <words.length; i++) {
	if (unique.indexOf(words[i]) == -1) {
            unique.push(words[i]);
        }
    }
    return unique;
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  const wordFrequencies = function count(sentence)
	let list = sentence.split(' ');
    let words = {};
    for (let i = 0; i < list.length; i++) {
      if(words[list[i]]) {
        words[list[i]]++;
      } else {
        words[list[i]] = 1;
      }
    }
    return words;
}
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function count(sentence) {
let dict = {}
for(let key in dict) {
  let value = dict[key];
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
