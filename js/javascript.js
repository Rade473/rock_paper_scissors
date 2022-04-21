const choices = ['Rock','Paper','Scissors']
rock = choices [0]
paper = choices [1]
scissors = choices [2]
function computerPlay() {
 random = Math.floor(Math.random()*choices.length)
 return computerChoice = choices[random]
}
function playerChoose(x) {
   if (x===rock) {
       return playerChoice = rock;
   }
 else if (x===paper){
        return playerChoice = paper;
}
else if (x===scissors){
    return playerChoice = scissors;
}
}
function game (){
    computerPlay();
    if (playerChoice===computerChoice) {
        alert ('Its a tie!')
    }
    else if (playerChoice === rock && computerChoice === paper){
        alert ("You loose!")
    }
    else if (playerChoice === paper && computerChoice === rock){
        alert ("You win!")
    }
    else if (playerChoice === scissors && computerChoice === paper){
        alert ("You win!")
    }
    else if (playerChoice === scissors && computerChoice === rock){
        alert ("You loose!")
    }
    else if (playerChoice === rock && computerChoice === scissors){
        alert ("You win!")
    }
    else if (playerChoice === paper && computerChoice === scissors){
        alert ("You loose")
    }
}