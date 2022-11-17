function getComputerChoise(){
    let choise = '';
    let randomNumber = getRandomInt(1,4); // 1 is inclusive,4 exclusive
    console.log(randomNumber);
}
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)+min);
}