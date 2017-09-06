// Set all variables to 0
var wins = 0;
var guessesRemaining = 10;
var lettersGuessed = [];
var blanks = [];
document.getElementById('wins').innerHTML = wins;
document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
// Pick word to be guessed
var wordList = ['accordion', 'guitar', 'harp', 'alphorn', 'saxophone', 'anvil', 'piano', 'bagpipes', 'banjo', 'baritone', 'bass', 'clarinet', 'drums', 'bassoon', 'bells', 'bongo', 'cello', 'chimes', 'clarinet', 'cornet', 'cowbell', 'cymbals', 'didgeridoo', 'organ', 'euphonium', 'fiddle', 'flugelhorn', 'flute', 'horn', 'gong', 'mandolin', 'oboe', 'piccolo', 'recorder', 'sousaphone', 'tambourine', 'triangle', 'trombone', 'trumpet', 'tuba', 'ukulele', 'violin', 'xylophone'];
var currentWord = wordList[Math.floor(Math.random() * (wordList.length - 1))];
console.log(currentWord);
// Show blanks
for (var i = 0; i < currentWord.length; i ++) {
	blanks.push("_ ");
}
document.getElementById('blanks').innerHTML = blanks.join("");
// 
// Receive input from player
document.onkeyup = function(event) {
	var letter = event.key;
	lettersGuessed.push(letter);
	console.log(lettersGuessed);
	if (letter ==  )
};

// Check to see if letter is in word
// If letter has already been chosen, don't do anything
// If letter is in word, replace blank with the letter
// If letter isn't in word, set number of guesses to -1
// If number of guesses == 0, end the game and reset
// If player solves the word, say congrats and reset
