// Get references to buttons and the volume slider
var startButton = document.getElementById("startButton");
var tutorialButton = document.getElementById("tutorialButton");
var settingsButton = document.getElementById("settingsButton");
var volumeSlider = document.getElementById("volumeSlider");
var backgroundMusic = document.getElementById("backgroundMusic");
var highScoresButton = document.getElementById("highScoresButton"); // Declare highScoresButton here
// Function to start the game
startButton.addEventListener("click", function () {
    window.location.href = "space_shooter.html"; // Redirect to the game page
});

// Function to display the tutorial modal
tutorialButton.addEventListener("click", function () {
    alert("Tutorial: How to play the game\n\n1. Move your mouse to control the spaceship.\n2. Click to shoot bullets at enemies.\n3. Collect health kits to increase your health.\n4. Collect power-ups to enhance your abilities temporarily.");
});

// Function to open the high scores modal
highScoresButton.addEventListener("click", function () {
    // Retrieve and display the high scores from local storage
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var highScoresMessage = "High Scores:\n\n";
    highScores.forEach(function (entry, index) {
        highScoresMessage += `${index + 1}. ${entry.name}: ${entry.score}\n`;
    });

    if (highScores.length === 0) {
        highScoresMessage = "No high scores yet!";
    }

    // Show the high scores modal
    var highScoresModal = document.getElementById("highScoresModal");
    var highScoresContent = highScoresModal.querySelector(".modal-content");
    highScoresContent.textContent = highScoresMessage;
    highScoresModal.style.display = "block";
});
// Function to handle game over
function gameOver() {
    alert("You DIED!\nYour score was " + score);

    // Check if the current score is a high score
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var playerName = prompt("Enter your name:"); // You can use a modal for better UI
    var newHighScore = { name: playerName, score: score };

    highScores.push(newHighScore);
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    // Save the top 10 high scores
    highScores = highScores.slice(0, 10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}


// Function to open the settings modal
settingsButton.addEventListener("click", function () {
    // Show the settings modal
    var settingsModal = document.getElementById("settingsModal");
    settingsModal.style.display = "block";

    // Get a reference to the close button in the settings modal
    var closeBtn = document.querySelector("#settingsModal .close");

    // Close the modal when the user clicks the close button
    closeBtn.addEventListener("click", function () {
        settingsModal.style.display = "none";
    });

    // Adjust the background music volume based on the slider value
    volumeSlider.addEventListener("input", function () {
        backgroundMusic.volume = parseFloat(volumeSlider.value);
    });
});
