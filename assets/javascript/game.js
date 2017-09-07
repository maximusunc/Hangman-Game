var wins = 0;

function hangman() {
// Set all variables to 0
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
	if (event.key.length == 1) {
	var letter = event.key
	} else {
		return
	};
// If letter has already been chosen, don't do anything
	if (lettersGuessed.includes(letter)) {
		return
	}
// Check to see if letter is in word
	else if (currentWord.includes(letter)) {
		console.log(letter);
		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === letter) {
// If letter is in word, replace blank with the letter
				blanks[i] = letter.toUpperCase();
				document.getElementById('blanks').innerHTML = blanks.join(" ");
			};
		};
	} 
// If letter isn't in word, set number of guesses to -1
	else {
		guessesRemaining -= 1;
		document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
	};
	lettersGuessed.push(letter);
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed.join(" ");
// If number of guesses == 0, end the game and reset
	if (guessesRemaining == 0) {
		hangman();
	}
// If player solves the word, say congrats and reset
	if (!blanks.includes("_ ")) {
		wins += 1;
		hangman();
	}
};
};