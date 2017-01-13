'use strict';

/* Please read! I can't speak for anyone else, but my issue with this diagnostic
and the same homework it came from was that I didn't entirely understand what I was
supposed to be doing and why and was planning on spending the weekend to work on understanding it.
I am probably going to get 0/4 again on this for the same reasons as before  and the time before that and wish
we were actually asked what we thought the issues were or spent more time on understanding it together before
having it assigned again like this. For my experience with this, I have been asked to do something
I didn't really understand 3 times in a row now  without any time to really clarify questions and
issues and that is a bit frustrating.
*/

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (string) {
  let words = string.split(' ');

  return (words.map((word) => {
      return word.toUpperCase().replace(/\W+/, '');

    }));

};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (string) {
  let uniqueWordsAsKeys = {};

  let normalizedWords = getNormalizedWords(string);

  let keys = [];
  let k = 0;


  const insideFunc = function(normalizedWords){
    for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    return uniqueWordsAsKeys[word] = true;
}
    return (keys[k++] in uniqueWordsAsKeys);

};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string) {
  /* your response here */
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string) {
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
