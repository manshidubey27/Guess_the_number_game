const numbersArray = Array.from({ length: 100 }, (_, i) => i + 1);
const randomIndex = Math.floor(Math.random() * numbersArray.length);
const randomNumber = numbersArray[randomIndex];
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    if (userGuess === ''){
        message.textContent = 'Please enter a number!';
        return;
    }
    attempts++;

    if(userGuess < randomNumber){
        message.textContent = 'Too low! Try Again...';
    } else if (userGuess > randomNumber) {
        message.textContent = "Too High! Try Again!...";
    } else {
        message.textContent = "Congratulations! You guessed the correct number.!"
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
};