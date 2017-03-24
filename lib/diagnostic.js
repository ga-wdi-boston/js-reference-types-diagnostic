'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (words) {
  let normalizedWords = [];
  normalizedWords = words.split(" ")
  for (let i = 0; i < normalizedWords.length; i++) {
    normalizedWords[i] = normalizedWords[i].toUpperCase()
  }
  return normalizedWords
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (words) {

    let uniqueWords = []

    for (i=0; i< words.length ; i++) {
        if(!uniqueWords.includes(words[i])) {
          uniqueWords.push(words[i])
        }
        else {
          console.log(" Word: "+ words[i])
          console.log(" uniqueWords: "+uniqueWords)
        }
    }
    return uniqueWords;
  };
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (totalWords, performUniqueCount) {
    // hold the word and count
    let wordAsKeyWithCount = {}
    // words and counts
    let wordsAndCount =[]

    console.log("Total Words: "+ getNormalizedWords(totalWords).length )
    if(performUniqueCount === undefined) {
      return
    }
    else {
      console.log("Compile words with number of occurances")

      for(let i=0; i< totalWords.length; i++) {
        if (wordsAndCount[totalWords[i]] !== undefined ){
          // word already in list
          wordsAndCount[totalWords[i]]++
        }
        else {
          // add word to list and set count to one
          wordsAndCount[totalWords[i]]=1
        }
      }
    }
    return wordsAndCount
  };
}

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (totalWords) {
  // hold the word and count
  let wordAsKeyWithCount = {}
  // words and counts
  let wordsAndCount = []

  console.log("Compile words with number of occurances")

  for(let i=0; i< totalWords.length; i++) {
    if (wordsAndCount[totalWords[i]] !== undefined ){
      // word already in list
      wordsAndCount[totalWords[i]]++
    }
    else {
      // add word to list and set count to one
      wordsAndCount[totalWords[i]]=1
    }
  }
  return wordsAndCount
};


module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
