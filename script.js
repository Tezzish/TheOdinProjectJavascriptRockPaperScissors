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

        this.computerChoice = this.getComputerChoice();

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

    update(){
        human.textContent = "Your score: " + this.score[0];
        comp.textContent = "Computer score: " + this.score[1];
    }

    updateComputerChoice(){
        computerChoice.textContent = "The computer chose: " + this.computerChoice;
    }

}

let i = 0;

let gameHolder = new GameHolder();

rock.onclick = () => {
    if(i < 10){
        gameHolder.sethumanChoice("rock");
        i = i + gameHolder.playGame();
        gameHolder.updateComputerChoice();
        gameHolder.update();

    }
    else{
        msg.textContent = "Max number of games reached";
    }
}

paper.onclick = () => {
    if(i < 10){
        gameHolder.sethumanChoice("paper");
        i = i + gameHolder.playGame();
        gameHolder.updateComputerChoice();
        gameHolder.update();
    }
    else{
        msg.textContent = "Max number of games reached";
    }
}

scissors.onclick = () => {
    if(i < 10){
        gameHolder.sethumanChoice("scissors");
        i = i + gameHolder.playGame();
        gameHolder.updateComputerChoice();
        gameHolder.update();
    }
    else{
        msg.textContent = "Max number of games reached";
    }
}
