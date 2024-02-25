//rolling the dice
//automatically generate a number for when the page loads  (hint: onload)
//then when user clicks button to roll, then a random num 1-6 will be generated 
//enter key can work to automatically roll again (hint: autofocus)
//Have meaningful field headers, all numbers right justified, and all random fields read only
//Have all numbers right justified and all random number fields implemented as read only

//this function was the original dice roller to generate and display the random num
// function generateRandomNumber() {
//     const randomNum = Math.floor(Math.random() * 6) + 1;
//     document.getElementById("randomNumberDisplay").textContent = randomNum; //set the text to be the random number
//     document.getElementById("generateButton").textContent = "Roll Again!"; //roll again button to generate a new number
//     // document.getElementById("randomNumberDisplay").innerHTML = "9"; 
//     // document.getElementById("die3").innerHTML = "13"; 
//     // document.getElementById("die").value = "14"; 
//   }

//this function was from the original dice roller so that the random num would be 
//displayed if the enter key was pressed 
  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // check if the Enter key is pressed
      displayNum(); // call the function to display the random number
    }
  });


//this function will take the num from node and then display it to the screen 
async function displayNum() {
  const randNum = await fetchGenerateRandomNum(); 
  document.getElementById("randomNumberDisplay").textContent = randNum;
}

//this function gets the random number from the node.js server
async function fetchGenerateRandomNum() {
  const url = "https://dice-roller-node.azurewebsites.net/generateRandomNum";
  /*when the code below is uncommented, it will cause a CORS (cross origin resource sharing) error
  because it is trying to find the page with that remote resource but it doesn't exist
  becuase the address is incorrect. when the console is opened up on the dice roller page
  with the inspect option, then this error will appear*/
  // const url = "https://dice-roller.azurewebsites.net/generateRandomNum";
  const response = await fetch(url); 
  const responseText = await response.text(); 
  return responseText; 


}


  







