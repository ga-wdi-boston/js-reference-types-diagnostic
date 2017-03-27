'use strict'

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

const normalizeWords = function(sampleString){
  const arrayOfStrings = sampleString.split(/\s+/)

  const upperCaseWords = function () {
    for (let i = 0; i < arrayOfStrings.length; i++){
      arrayOfStrings[i] = arrayOfStrings[i].replace(/[.,+@\/#!$%\^&\*;:{}=\-_`~()]/g,"").toUpperCase()
    }
  }
  upperCaseWords();
  return arrayOfStrings
}

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (sampleString) {
  const arrayOfStrings = sampleString.split(/\s+/)
  const words = []

  const upperCaseWords = function () {
    for (let i = 0; i < arrayOfStrings.length; i++){
      arrayOfStrings[i] = arrayOfStrings[i].replace(/[.,+@\/#!$%\^&\*;:{}=\-_`~()]/g,"").toUpperCase()
    }
  }

  const newWord = function() {

  for (let i = 0; i < arrayOfStrings.length; i++){
    if(words.includes(arrayOfStrings[i]) === false){
       words.push(arrayOfStrings[i])
     }
  }
}
upperCaseWords()
newWord()
return words
}

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (sampleString, uniqueWords) {
  const arrayOfStrings = sampleString.split(/\s+/)
  const words = []

    for (let i = 0; i < arrayOfStrings.length; i++){
      arrayOfStrings[i] = arrayOfStrings[i].replace(/[.,+@\/#!$%\^&\*;:{}=\-_`~()]/g,"").toUpperCase()
    }

  if (uniqueWords === true){

      for (let i = 0; i < arrayOfStrings.length; i++){
        if(words.includes(arrayOfStrings[i]) === false){
          words.push(arrayOfStrings[i])
        }
      }

    return words.length
  }
  return arrayOfStrings.length
}

const gettysburgAddress =
`Four score and seven years ago our fathers brought forth on this continent, a
 new nation, conceived in Liberty, and dedicated to the proposition that all men
 are created equal.
Now we are engaged in a great civil war, testing whether that nation, or any
 nation so conceived and so dedicated, can long endure. We are met on a great
 battle-field of that war. We have come to dedicate a portion of that field, as
 a final resting place for those who here gave their lives that that nation
 might live. It is altogether fitting and proper that we should do this.
But, in a larger sense, we can not dedicate -- we can not consecrate -- we can
 not hallow -- this ground. The brave men, living and dead, who struggled here,
 have consecrated it, far above our poor power to add or detract. The world will
 little note, nor long remember what we say here, but it can never forget what
 they did here. It is for us the living, rather, to be dedicated here to the
 unfinished work which they who fought here have thus far so nobly advanced. It
 is rather for us to be here dedicated to the great task remaining before us --
 that from these honored dead we take increased devotion to that cause for which
 they gave the last full measure of devotion -- that we here highly resolve that
 these dead shall not have died in vain -- that this nation, under God, shall
 have a new birth of freedom -- and that government of the people, by the
 people, for the people, shall not perish from the earth.`;

wordCount(gettysburgAddress, true)

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (sampleString) {
    const arrayOfStrings = sampleString.split(/\s+/)
    const words = []

    for (let i = 0; i < arrayOfStrings.length; i++){
      if(words.includes(arrayOfStrings[i]) === false){
        words.push(arrayOfStrings[i])
      }
    }


}

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies
}
