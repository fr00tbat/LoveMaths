// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); //returns all elements as iterable array
    let play;

    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                
                
                /** testing */
                // console.log("gametype is : ->>> " + gameType);
                // play = gameType;
                // console.log("the type of variable play is is: " +typeof(play));
                // console.log(play);
                
                runGame(gameType);
            }
        })
    }
    /** testing */
    // console.log(play);
    // console.log("hello can you read me");
    // runGame("addition");

})

/**
 * Docstring:
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    //creating 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    // } else if(gameType === "subtract") {
    //     displaySubtractQuestion(num1, num2);
    } else if(gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    // } else if(gameType === "division") {
    //     displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }


}

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        incrementScore();
        alert("Hey! You got it right! :D");
    } else {
        incrementWrongAnswer();
        alert(`Aw.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands and the operator directly from the DOM
 * and returns the correct answer
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    // } else if (operator === "-") {
    //     return [operand1 - operand2, "subtract"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    // } else if (operator === "/") {
    //     return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}


/**
 * Gets current score from DOM and increments by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;


    // own attempt at function:
    // let score = 0;
    // let dispscore = parseInt(document.getElementById("score").innerText);
    // if (dispscore != 0 ) {
    //     score = dispscore;
    // }
    // console.log("Type of var score is: " + typeof score);
    // if (score == undefined){
    //     score = 0;
    // } else {
    //     ++score;
    // }
    // let toscore = document.getElementById('score');
    // toscore.innerText = score;
    // console.log("score is: " + score);

}

/**
 * Gets current count of incorrect answers from DOM and inrements by 1
 */
function incrementWrongAnswer() {
    
    let oldIncorrect= parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldIncorrect;


    // own attempt at function:
    // let incorrect = 0;
    // let dispincorrect = parseInt(document.getElementById("incorrect").innerText);
    // if (dispincorrect != 0 ) {
    //     incorrect = dispincorrect;
    // }

    // console.log("Type of var incorrect is: " + typeof incorrect);
    // if (incorrect == undefined){
    //     incorrect = 0;
    
    // } else {
    //     ++incorrect;
    // }
    // let toincorrect = document.getElementById('incorrect');
    // toincorrect.innerText = incorrect;
    // console.log("incorrect is: " + incorrect);
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}

// function displaySubtractQuestion(operand1, operand2) {

//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "-";

// }

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}


// function displayDivisionQuestion(operand1, operand2) {

//     document.getElementById('operand1').textContent = operand1;
//     document.getElementById('operand2').textContent = operand2;
//     document.getElementById('operator').textContent = "/";

// }


