# Web Dice Roller for Pass the Pigs
#### Preliminary Info: 
created by: Olivia Adamic <br>
email: oliviaradamic@lewisu.edu <br>
project name: Web Dice Roller <br>

#### How to Play: 
##### Regular Pig

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

- If the player rolls a 1, they score nothing and it becomes the next player's turn.
- If the player rolls any other number, it is added to their turn total and the player's turn continues.
- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

For example, the first player, Donald, begins a turn with a roll of 5. Donald could hold and score 5 points, but chooses to roll again. Donald rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Donald rolls a 1, and must end his turn without scoring. The next player, Alexis, rolls the sequence 4-5-3-5-6, after which she chooses to hold, and adds her turn total of 23 points to her score. 

Once the webpage is loaded, you can either start with the randomly generated number that already appears on the screen or you either click the Roll Again! button or press the enter key to generate a new one. 

#### Credits: 
photo credits: <a href="https://www.istockphoto.com">https://www.istockphoto.com</a> <br>
directions sourced from: <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)">https://en.wikipedia.org/wiki/Pig_(dice_game)</a> <br> 

##### Code: 
these lines were sourced from ChatGPT in order to get the enter key working properly to trigger a new random number to be generated any time it is pressed at any point on the screen: 

    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") { // check if the Enter key is pressed
        generateRandomNumber(); // call the function to generate the random number
        }
    });


