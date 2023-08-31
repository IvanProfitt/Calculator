let firstNumber;
let numString ="";
const calcScreen = document.getElementById("screen");
function getFirstNumber(nextNum){
    if(firstNumber!=undefined){
    numString=firstNumber.toString();
    }
    let nextString=nextNum.toString();

    numString=numString+nextString;
    giveOutput(numString);
    firstNumber = parseInt(numString);

}

function clearNum(){
    console.log("1");
    calcScreen.innerHTML=" ";
}

function getSecondNumber(outputNum){
    
    
}

function returnFirstNumber(){
    return firstNumber;
}

function returnSecondNumber(){
    return secondNumber;

}

function returnOperator(){
    return operatorValue;

}

function getFunction(){
        clear();
        operate(returnFirstNumber(),returnOperator(),returnSecondNumber());
    }

function operate(first, operator, second){

}

function giveOutput(outputString){
    calcScreen.innerHTML=`${outputString}`;

}