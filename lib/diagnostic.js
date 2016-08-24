'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const car = function (/* */) {
  make: 'Toyota';
  model: 'Corolla';
  modelYear: 2003;
  mileage: 157290;
  addMileage: function(); {
    car.mileage += 50;
    return car.mileage;}
  }
let car = ["Toyota", "Corolla", "2003", "157290"]


// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  /* your response here */
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function (/* */) {
  function wordCount(string) {
  var totalSoFar = 0;
  for (var i = 0; i < wordCount.length; i++)
    if (string(i) === " ") {
      totalSoFar = +1;
  }
  totalsoFar += 1;

console.log(wordCount("The Internet is helping me with these questions!"));
};

// 4. Write a function that returns a dictionary with unique words as keys
// and a count of each word as the calue for that key
const wordFrequencies = function (/* */) {
  function wordFrequencies(string) {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function(w) {
        if (!freqMap[i]) {
            freqMap[i] = 0;
        }
        freqMap[i] += 1;
    });
    return freqMap;
    console.log(wordFrequencies("The last lessons have been so hard!"));

}

};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
