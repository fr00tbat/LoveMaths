// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); //returns all elements as iterable array

    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * Docstring:
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer tahs been processed
 */

runGame() {
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;
}

checkAnswer() {

}

calculateCorrectAnswer() {

}

incrementScore() {

}

incrementWrongAnswer() {

}

displayAdditionQuestion() {

}

displaySubtractQuestion() {

}

displayMultiplyQuestion() {

}





