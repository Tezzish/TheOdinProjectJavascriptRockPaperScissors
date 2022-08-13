const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const msg = document.getElementById("msg");
const human = document.getElementById("human");
const comp = document.getElementById("comp");
const computerChoice = document.getElementById("computerChoice");

class GameHolder {

    constructor(){
        this.score = [0,0];
        this.choices = ["rock", "paper", "scissors"];
        this.humanChoice = null;
        this.winmsg = "Congratulations! You won this round.";
        this.losemsg = "You lost this round. Better luck next time";
        this.drawmsg = "This round was a draw, new round";
    }

    sethumanChoice(choice){
        this.humanChoice = choice;
    }

    getComputerChoice(){
        var index = Math.random() * 3;            
        index = Math.floor(index);
        var choice = this.choices[index];
        return choice;
    }

    playGame(){
        //gets computer choice
        this.computerChoice = this.getComputerChoice();
        
        //human chose rock
        if(this.humanChoice == "rock"){
            if(this.computerChoice == "paper"){
                msg.textContent = this.losemsg;
                this.score[1]++;
                console.log(this.score);
                return 1;
            }
            else if(this.computerChoice == "scissors"){
                msg.textContent = this.winmsg;
                this.score[0]++;
                console.log(this.score);
                return 1;
            }
            else{
                msg.textContent = this.drawmsg;
                console.log(this.score);
                return 0;
            }
        }    
        //human chose scissors
        else if(this.humanChoice == "scissors"){
            if(this.computerChoice == "rock"){
                msg.textContent = this.losemsg;
                this.score[1]++;
                console.log(this.score);
                return 1;
            }
            else if(this.computerChoice == "paper"){
                msg.textContent = this.winmsg;
                this.score[0]++;
                console.log(this.score);
                return 1;
            }
            else{
                msg.textContent = this.drawmsg;
                console.log(this.score);
                return 0;
            }
        }

        //human chose paper
        else if(this.humanChoice == "paper"){
            if(this.computerChoice == "scissors"){
                msg.textContent = this.losemsg;
                this.score[1]++;
                console.log(this.score);
                return 1;
            }
            else if(this.computerChoice == "rock"){
                msg.textContent = this.winmsg;
                this.score[0]++;
                console.log(this.score);
                return 1;
            }
            else{
                msg.textContent = this.drawmsg;
                console.log(this.score);
                return 0;
            }
        }
    }

    //updates the score on the bottom
    function update(){
        human.textContent = "Your score: " + this.score[0];
        comp.textContent = "Computer score: " + this.score[1];
    }

    //updates what the computer chose
    function updateComputerChoice(){
        computerChoice.textContent = "The computer chose: " + this.computerChoice;
    }

    //updates the text after the entire game is finished.
    function finalText(){
        msg.textContent = "Max number of games reached";
        if(this.score[0] > this.score[1]){
            msg.style = "color: green;"
        }

        else if (this.score[0] < this.score[1]){
            msg.style = "color: red;"
        }
        else{
            msg.style = "color: red;"
        }
    }

    //plays the game when a button is pressed
    function clicked(str){
        this.humanChoice = str;
        this.updateComputerChoice();
        this.update();
        return this.playGame()
    }

}

let i = 0;

let gameHolder = new GameHolder();

rock.onclick = () => {
    if(i < 5){
        i = i + gameHolder.clicked(rock);
    }
    else{
        gameHolder.finalText();
    }
}

paper.onclick = () => {
    if(i < 5){
        i = i + gameHolder.clicked(rock);
    }
    else{
        gameHolder.finalText();
    }
}

scissors.onclick = () => {
    if(i < 5){
        i = i + gameHolder.clicked(rock);
    }
    else{
        gameHolder.finalText();
    }
}
