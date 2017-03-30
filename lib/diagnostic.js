'use strict'

// Reuse functions wherever possible.
// create a string
const paragraph = 'Hello Hello my name is Nikki'
// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

// split the words
const words = paragraph.split(' ')
// words => ["Hello", "Hello", my", "name", "is", "Nikki"]

const normalizeWords = function () {
	for (let i = 0; i < words.length; i++) {
	  normalizedWords[i] = words[i].toUpperCase()
	}
}
// normalizedWords => ["HELLO", "HELLO", "MY", "NAME", "IS", "NIKKI"]

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWordsAsKeys = function (/* */) {
	for (let i = 0; i < normalizedWords.length; i++) {
	  	if (uniqueWordsAsKeys[normalizedWords[i]] === undefined) {
	  		uniqueWordsAsKeys[normalizedWords[i]] = 1
	} else {
	    uniqueWordsAsKeys[normalizedWords[i]]++
	  }
	}
}

const uniqueWords = uniqueWordsAsKeys[]

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  /* your response here */
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  /* your response here */
}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
