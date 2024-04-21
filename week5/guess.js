// Set the target number
const targetNumber = 48;

// Number of attempts allowed
let attempts = 6;

// Function to start the game
function startGame() {
    // Reset attempts
    attempts = 6;
    
    // Clear previous messages
    document.getElementById("message").innerText = "";
    document.getElementById("attempts").innerText = `Attempts left: ${attempts}`;
    document.getElementById("result").innerText = "";
}

// Function to check the guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    const messageElement = document.getElementById("message");
    const attemptsElement = document.getElementById("attempts");
    const resultElement = document.getElementById("result");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.innerText = "Please enter a valid number between 1 and 100.";
    } else {
        // Check if attempts are already exhausted
        if (attempts === 0) {
            messageElement.innerText = "Sorry, you've run out of attempts.";
            return; // Exit the function if attempts are exhausted
        }
        
        attempts--;
        attemptsElement.innerText = `Attempts left: ${attempts >= 0 ? attempts : 0}`; // Ensure attempts don't go negative

        if (userGuess === targetNumber) {
            messageElement.innerText = "Congratulations! You guessed the correct number!";
            resultElement.innerText = `The correct number was ${targetNumber}.`;
            resultElement.style.color = "green";
        } else if (userGuess < targetNumber) {
            messageElement.innerText = "Too low! Try a higher number.";
        } else {
            messageElement.innerText = "Too high! Try a lower number.";
        }

        if (attempts === 0 && userGuess !== targetNumber) {
            messageElement.innerText = "Sorry, you've run out of attempts. The correct number was " + targetNumber + ".";
            resultElement.style.color = "red";
        }
    }
}

