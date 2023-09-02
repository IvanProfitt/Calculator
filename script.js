let firstNumber=undefined;
let secondNumber=undefined;
let operatorValue=undefined;
let numString ="";
let clearScreen=true;
let firstClear=true;
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
    if(operator===undefined || secondNumber===undefined || firstNumber===undefined){
        calcScreen.innerHTML="ERROR";
        resetVariables();

    }

    if (operator === 0) {
        // Perform the operation
        firstNumber = firstNumber + secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();
        resetVariables();

    }
    if (operator === 1) {
        // Perform the operation
        firstNumber = firstNumber - secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();
        resetVariables();
    }
    if (operator === 2) {
        // Perform the operation
        firstNumber = firstNumber * secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();
        resetVariables();
    }
    if (operator === 3) {
        // Perform the operation
        firstNumber = firstNumber / secondNumber;
        console.log("Result:", firstNumber);

        // Convert the result to a string and update calcScreen
        calcScreen.innerHTML = firstNumber.toString();
        resetVariables();
    }
}

function resetVariables(){
    firstNumber = parseInt(calcScreen.innerHTML);
    secondNumber = undefined;
    clearScreen=false;

}


var equals = document.querySelectorAll('#equals');


equals.forEach(function (button) {
    button.addEventListener('click', handleEqualsClick);
});

function handleEqualsClick(event){
    calcScreen.innerHTML="";
    if ((isNaN(secondNumber)===false) &&(operatorValue !== undefined) && (secondNumber !== undefined) && (firstNumber !== undefined)) {
    operate(returnFirstNumber(),returnOperator(), returnSecondNumber());
    resetVariables();
  }
}





//OperatorValue, firstNumber, and secondNumber must all
//have a value.
///
//An operator value must be pushed after already having a
//previous value.
///
//firstNum must become the answer, printed to the output,
//and the operator must be reset. 