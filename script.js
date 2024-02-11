//rolling the dice
//automatically generate a number for when the page loads  (hint: onload)
//then when user clicks button to roll, then a random num 1-6 will be generated 
//enter key can work to automatically roll again (hint: autofocus)
//Have meaningful field headers, all numbers right justified, and all random fields read only
//Have all numbers right justified and all random number fields implemented as read only

function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    document.getElementById("randomNumberDisplay").textContent = randomNum; //set the text to be the random number
    document.getElementById("generateButton").textContent = "Roll Again!"; //roll again button to generate a new number
  }

  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // Check if the Enter key is pressed
      generateRandomNumber(); // Call the function to generate the random number
    }
  });

  generateRandomNumber();







