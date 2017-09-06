// Set all variables to 0
var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
document.getElementById('wins').innerHTML = wins;
// Pick word to be guessed
var wordList = ['accordion', 'guitar', 'harp', 'alphorn', 'saxophone', 'anvil', 'piano', 'bagpipes', 'banjo', 'baritone', 'bass', 'clarinet', 'drums', 'bassoon', 'bells', 'bongo', 'cello', 'chimes', 'clarinet', 'cornet', 'cowbell', 'cymbals', 'didgeridoo', 'organ', 'euphonium', 'fiddle', 'flugelhorn', 'flute', 'horn', 'gong', 'mandolin', 'oboe', 'piccolo', 'recorder', 'sousaphone', 'tambourine', 'triangle', 'trombone', 'trumpet', 'tuba', 'ukulele', 'violin', 'xylophone'];
var currentWord = wordList[Math.floor(Math.random() * (wordList.length - 1))];
console.log(currentWord);
document.getElementById('currentWord').innerHTML = currentWord;
// Show blanks

// 
// Receive input from player
// Check to see if letter is in word
// If letter is in word, replace blank with the letter
// If letter isn't in word, set number of guesses to -1
// If letter has already been chosen, don't do anything
// If number of guesses == 0, end the game and reset
// If player solves the word, say congrats and reset
