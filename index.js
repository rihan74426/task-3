let restart = document.getElementById("restart");
let low = 1;
let high = 10;



function game(){
let correctAns = getRandomIntInclusive(low, high);
console.log(correctAns)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
    for(var i = 3; i>0; i--){
    var guess = prompt("Guess a number between 1 to 10");
      if(guess > correctAns){
        alert(`Correct answer is smaller!
         chances left: ${i-1}   `)
      }else if(guess < correctAns){
          alert(`Correct answer is greater!
          chances left: ${i-1}`)
      }
      if(guess == correctAns){
            alert("You win!")
            break;
        }
        
    }
       guess == correctAns ? alert("You win!") : alert("You lose!")
}    
 game();

restart.addEventListener("click", restartGame)

function restartGame(){
    game()
}