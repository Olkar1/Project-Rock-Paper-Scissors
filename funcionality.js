function getComputerChoise(){
    let choise = '';
    let randomNumber = getRandomInt(1,4); // 1 is inclusive,4 exclusive
    switch(randomNumber){
        case 1:
            choise = "Rock";
            break;
        case 2:
            choise = "Paper";
            break;
        case 3:
            choise = "Scissors";
            break;
        default:
            console.error("Random number out of range");
            break;
    }
    return choise;
}
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}

function playRound(e){
    const playerChoise = String(e.currentTarget.computedName).toLowerCase();
    const computerChoise = String(getComputerChoise()).toLowerCase();

    console.log("Player choise: " + playerChoise + " Computer choise: " + computerChoise);
    
    return getResult(playerChoise,computerChoise);
}
function getResult(playerChoise,computerChoise){
    if(playerChoise != "rock" && playerChoise != "paper" && playerChoise != "scissors"){
        return showResult("Unknown pick");
    }

    if(playerChoise == computerChoise){
        return showResult("Tie");
    }
    else{
        switch(playerChoise){
            case "rock":
                if(computerChoise == "paper"){
                    return showResult("You lost :(");
                }
                else{
                    return showResult("You won!");
                }
                break;
            case "paper":
                if(computerChoise == "scissors"){
                    return showResult("You lost :(");
                }
                else{
                    return showResult("You won!");
                }
                break;
            case "scissors":
                if(computerChoise == "rock"){
                    return showResult("You lost :(");
                }
                else{
                    return showResult("You won!");
                }
                break;
        }
    }
}

function game(numberOfGames){
    for(let i =0; i<numberOfGames; i++){
        console.log(playRound(getComputerChoise()));
    }
}

const bttns = document.querySelectorAll('button');
bttns.forEach(btn =>{
    btn.addEventListener('click',playRound)
})

const result = document.querySelector('.result');
console.log(result);
function showResult(resoult){
    console.log(resoult);
    result.textContent = resoult; 
}