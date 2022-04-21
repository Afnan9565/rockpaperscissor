// =====================================
// Defining Variables
// =====================================
const computerText      = document.getElementById("computertxt");
const userText          = document.getElementById("usertxt");
const results           = document.getElementById("results");
const userpointsTxt     = document.getElementById("uptxt");
const computerpointsTxt = document.getElementById("cptxt");
result                  = undefined;
userPoints              = 0;
computerPoints          = 0;

// =====================================
// User Choosed: Rock
// =====================================
const rock = () => {
    userInput = "Rock";
    computerInput = undefined;
    CRI = Math.floor(Math.random() * 3);
    
    if(CRI === 0){
        computerInput = "Rock";
        console.log(computerInput);
    }
    else if(CRI === 1){
        computerInput = "Paper";
        console.log(computerInput);
    }
    else{
        computerInput = "Scissor"
        console.log(computerInput);
    }
    computerText.innerHTML = computerInput;
    userText.innerHTML     = userInput;
    if(computerInput === "Rock"){
        results.innerHTML = "It's a tie";
        result = "tie";
    }
    else if(computerInput === "Scissor"){
        results.innerHTML = "Congrats! You won";
        result = "win"
    }
    else{
        results.innerHTML = "Oops! You lost";
        result = "lose"
    }
    if(result === "win"){
        userPoints++
        userpointsTxt.innerHTML = userPoints;
    }
    else if(result === "lose"){
        computerPoints++
        computerpointsTxt.innerHTML = computerPoints;
    }
    else{
        console.log("Do Nothing");
    }
}


// =====================================
// User Choosed: Paper
// =====================================
const paper = () => {
    userInput = "Paper";
    computerInput = undefined;
    CRI = Math.floor(Math.random() * 3);
    
    if(CRI === 0){
        computerInput = "Rock";
        console.log(computerInput);
    }
    else if(CRI === 1){
        computerInput = "Paper";
        console.log(computerInput);
    }
    else{
        computerInput = "Scissor"
        console.log(computerInput);
    }
    computerText.innerHTML = computerInput;
    userText.innerHTML     = userInput;
    if(computerInput === "Rock"){
        results.innerHTML = "Congrats! You won";
        result = "win"
    }
    else if(computerInput === "Scissor"){
        results.innerHTML = "Oops! You lost";
        result = "lose"
    }
    else{
        results.innerHTML = "It's a tie";
        result = "tie";
    }
    if(result === "win"){
        userPoints++
        userpointsTxt.innerHTML = userPoints;
    }
    else if(result === "lose"){
        computerPoints++
        computerpointsTxt.innerHTML = computerPoints;
    }
    else{
        console.log("Do Nothing");
    }
}


// =====================================
// User Choosed: Scissor
// =====================================
const scissor = () => {
    userInput = "Scissor";
    computerInput = undefined;
    CRI = Math.floor(Math.random() * 3);
    
    if(CRI === 0){
        computerInput = "Rock";
        console.log(computerInput);
    }
    else if(CRI === 1){
        computerInput = "Paper";
        console.log(computerInput);
    }
    else{
        computerInput = "Scissor"
        console.log(computerInput);
    }
    computerText.innerHTML = computerInput;
    userText.innerHTML     = userInput;
    if(computerInput === "Rock"){
        results.innerHTML = "Oops! You lost";
        result = "lose"
    }
    else if(computerInput === "Scissor"){
        results.innerHTML = "It's a tie";
        result = "tie"
    }
    else{
        results.innerHTML = "Congrats! You won";
        result = "win"
    }
    if(result === "win"){
        userPoints++
        userpointsTxt.innerHTML = userPoints;
    }
    else if(result === "lose"){
        computerPoints++
        computerpointsTxt.innerHTML = computerPoints;
    }
    else{
        console.log("Do Nothing");
    }
}
