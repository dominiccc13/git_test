// generate opponent's selection
let selections = ['rock', 'paper', 'scissors'];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  
let randomInteger = getRandomIntInclusive(0, 2); 
let selection = selections[randomInteger];
// get user's selection
let userSelection = prompt("Enter rock, paper, or scissors: ")
// determine winner
if (userSelection == selection) {
    console.log('Tie!')
}
console.log(`Opponent selection: ${selection}`);