const choices = ['Rock','Paper','Scissors']
rock = choices [0]
paper = choices [1]
scissors = choices [2]
let tiecount=0;
let wincount=0;
let losecount=0;
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
    updateScore();
    computerPlay();
    if (playerChoice===computerChoice) {
        tiecount++;
        document.getElementById('result').textContent = 'It\'s a tie!'
        document.getElementById('result').style.backgroundColor = 'yellow'
        document.getElementById('result').style.color = 'black'
    }
    else if (playerChoice === rock && computerChoice === paper){
        document.getElementById('result').textContent = 'You Lost!'
        losecount++;
        document.getElementById('result').style.backgroundColor = 'red'
        document.getElementById('result').style.color = 'white'
    }
    else if (playerChoice === paper && computerChoice === rock){
        document.getElementById('result').textContent = 'You WON!'
        wincount++;
        document.getElementById('result').style.backgroundColor = 'green'
        document.getElementById('result').style.color = 'black'
    }
    else if (playerChoice === scissors && computerChoice === paper){
        document.getElementById('result').textContent = 'You WON!'
        wincount++;
        document.getElementById('result').style.backgroundColor = 'green'
        document.getElementById('result').style.color = 'black'
    }
    else if (playerChoice === scissors && computerChoice === rock){
        document.getElementById('result').textContent = 'You Lost!'
        losecount++;
        document.getElementById('result').style.backgroundColor = 'red'
        document.getElementById('result').style.color = 'white'
    }
    else if (playerChoice === rock && computerChoice === scissors){
        document.getElementById('result').textContent = 'You WON!'
        wincount++;
        document.getElementById('result').style.backgroundColor = 'green'
        document.getElementById('result').style.color = 'black'
    }
    else if (playerChoice === paper && computerChoice === scissors){
        document.getElementById('result').textContent = 'You Lost!'
        losecount++;
        document.getElementById('result').style.backgroundColor = 'red'
        document.getElementById('result').style.color = 'white'
    }
    document.getElementById('computerChoice').textContent = computerChoice
    document.getElementById('playerChoice').textContent = playerChoice
    updateScore();
}
function updateScore(){
document.getElementById('wincount').textContent = wincount;
document.getElementById('losecount').textContent = losecount;
document.getElementById('tiecount').textContent = tiecount;
}
function resetScore(){
    tiecount = 0;
    wincount = 0;
    losecount = 0;
    updateScore()

}
