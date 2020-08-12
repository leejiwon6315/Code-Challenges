const range = document.getElementById(`jsRange`);
const play = document.getElementById(`jsSubmit`);
const numRangeText = document.getElementById(`jsNumRangeText`);
const compareText = document.getElementById(`jsChooseText`);
const resultText = document.getElementById(`jsResultText`);
const inputForm = document.getElementById(`jsNumber`);

let maxRange = range.value;

let goalNum;

function handleRangeNumber(event){
    maxRange = event.target.value;
    
    numRangeText.innerText = `Generate a number between 0 and ${maxRange}`;

}

function generateRandomNum(){
    const randomNum = Math.random();
    const resultRandomNum = Math.floor(randomNum*maxRange +1);
    
    goalNum = resultRandomNum;
}

function compareNum(event){
    const userInputNum = inputForm.value;
    
    compareText.innerText = `You chose: ${userInputNum}, the machine chose ${goalNum}.`;
    
    if(userInputNum == goalNum){
        resultText.innerText = `You won!`;
    }else{
        resultText.innerText = `You lost!`;
    }
}

if(range){
    range.addEventListener(`input`, handleRangeNumber);
}

if(play){
    play.addEventListener(`click`, generateRandomNum);
    play.addEventListener(`click`, compareNum);
}

generateRandomNum();


