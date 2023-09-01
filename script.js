let firstNumber;
let secondNumber;
let operatorValue;
let numString ="";
let clearScreen=true;
const calcScreen = document.getElementById("screen");

function returnFirstNumber(){
    return firstNumber;
}

function returnSecondNumber(){
    return secondNumber;

}

function returnOperator(){
    return operatorValue;

}


function updateValue(){
    if(operatorValue===undefined){
        firstNumber=firstNumber=parseInt(calcScreen.innerHTML);
    }

    else{
        secondNumber=parseInt(calcScreen.innerHTML);
    }
}


function clearNum(){
    calcScreen.innerHTML="";
    updateValue();
}



function deleteNum(){
    if(calcScreen.innerHTML.length>0){
        calcScreen.innerHTML=calcScreen.innerHTML.slice(0,-1);
        updateValue();
    }
}


function addNumber(nextNumber){
    if(clearScreen===false){
        console.log("ahhh");
        clearScreen=true;
        clearNum();
    }
    if(firstNumber===undefined){
        calcScreen.innerHTML=" ";
    }
    let nextString=nextNumber.toString();
    calcScreen.innerHTML=calcScreen.innerHTML+nextString;
    updateValue();

}

function setOperator(value){
    operatorValue=value;

}

function operate(firstNumber, operator, secondNumber){

    if (operator === 0) {
        // Perform the operation
        firstNumber = firstNumber + secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();


        firstNumber = undefined;
        secondNumber = undefined;
        operatorValue = undefined;
        clearScreen=false;
    }
    if (operator === 1) {
        // Perform the operation
        firstNumber = firstNumber - secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();


        firstNumber = undefined;
        secondNumber = undefined;
        operatorValue = undefined;
        clearScreen=false;
    }
    if (operator === 2) {
        // Perform the operation
        firstNumber = firstNumber * secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();


        firstNumber = undefined;
        secondNumber = undefined;
        operatorValue = undefined;
        clearScreen=false;
    }
    if (operator === 3) {
        // Perform the operation
        firstNumber = firstNumber / secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();


        firstNumber = undefined;
        secondNumber = undefined;
        operatorValue = undefined;
        clearScreen=false;
    }
}