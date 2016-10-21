'use strict';

// Reuse functions wherever possible.

const paragraph = `Four score and seven years ago our fathers brought forth on this continent, a
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

// 1. Write a function (step 1) that takes a string argument (step 2)
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (split_this_string) {
  let split = split_this_string.split(/\s+/);
  console.log(split);
  let normalized_words = [];
  let no_punctuation_word;
  let uppercase_word;
  for (let i = 0; i < split.length; i++) {
    no_punctuation_word = (split[i]).replace(/\W+/, '');
    uppercase_word = no_punctuation_word.toUpperCase();
    normalized_words[i] = uppercase_word;
  }
  return normalized_words;
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (unique_string) {
  let normalized_words = normalizeWords(unique_string);
  let unique_words_dict = {};
  let unique_words_array = [];
  for (let i = 0; i < normalized_words.length; i++) {
    unique_words_dict[normalized_words[i]] = true;
  }

  let k = 0;
  for (unique_words_array[k++] in unique_words_dict); //jshint ignore:line

  return unique_words_array;
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (string_to_count, count_unique) {
  if (count_unique === true){
    console.log(uniqueWords(string_to_count));
    return uniqueWords(string_to_count).length;
  } else if (count_unique === false){
    return normalizeWords(string_to_count).length;
  }
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (string_to_key_dict) {
  let normalized_words = normalizeWords(string_to_key_dict);
  let unique_words_count = {};

  for (let i = 0; i < normalized_words.length; i++) {
    unique_words_count[normalized_words[i]] = 0;
  }

  for (let i = 0; i < normalized_words.length; i++) {
    unique_words_count[normalized_words[i]] += 1;
  }

  return unique_words_count;
};

normalizeWords(paragraph);

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};
