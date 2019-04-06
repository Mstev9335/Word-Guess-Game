  //variables
  var computerChoice = ["movie", "be", "card", "boolean", "computer", "javascript", "laptop",
  "screen", "keyboard", "float" ]                

var wins = 0;
var losses = 0;
var blank = [];
var guesses = 10;
var guessedLetters = [];
var word=[];
var lengthWord;
var match;
var chars=[];

//display
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("word").innerHTML = blank;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("guessed").innerHTML = guessedLetters;


//function to have computer pick a letter at random
function compGuess(){


word = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//console log to test
console.log(word);
chars = word.split('');
console.log(chars);
return chars;
}

// call function to have computer get a word
compGuess();

// determine number of letters in word
function wordLength(){
lengthWord = word.length;
// console.log(lengthWord);
}

// call function to get word length
wordLength();


// display underscores for the number of letters in the word
function setBlanks(){
for(var i = 0; i<lengthWord; i++){
blank[i]="_";

document.getElementById("word").innerHTML = blank.join("  ");
}
// console.log(blank);
// document.getElementById("word").innerHTML = blank;
}
setBlanks();

// function to get user guess
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// determines if the letter the user guessed is in the word or not
if(word.indexOf(userGuess) !=-1){
console.log("letter is in word");

// replaces the blank with the corresponding letter
for(var i=0; i < lengthWord; i++) {
if(userGuess==word[i]){
blank[i] = word[i];
}
}
//  document.getElementById("word").innerHTML = blank;
document.getElementById("word").innerHTML = blank.join("  ");
//  console.log(blank);
}

// if letter isnt in word
else{
// console.log for testing
console.log("letter is not in word");
guesses--;

// display new guesses
document.getElementById("guesses").innerHTML = guesses;

// Store the guess into the guessedLetters array.
guessedLetters.push(userGuess);

// display guessed letters
document.getElementById("guessed").innerHTML = guessedLetters;

}

var pc = chars.join();
var client = blank.join();

if(pc===client){
wins++;
// display new wins
blank = [];
document.getElementById("wins").innerHTML = wins;
document.getElementById("word").innerHTML = blank;


// display guessed letters
guessedLetters = [];
document.getElementById("guessed").innerHTML = guessedLetters;
// start game over
compGuess();
wordLength();
setBlanks();
guesses = 10;
// display new guesses
document.getElementById("guesses").innerHTML = guesses;

}


if(guesses===0){
blank = [];
compGuess();
wordLength();
setBlanks();
losses++;
guesses = 10;
// display new guesses
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("losses").innerHTML = losses;
// display guessed letters
guessedLetters = [];
document.getElementById("guessed").innerHTML = guessedLetters;

document.getElementById("word").innerHTML = blank.join("  ");
}

};          

                