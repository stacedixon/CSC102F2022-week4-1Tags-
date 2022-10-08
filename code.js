function countDownTimer(){
    //countdownTimer will go from 50 to 0 by 5s
    console.log ("countDownTimer() started");
    var currTime = 50;
    document.getElementById("countDis").innerHTML = currTime + " sec"; 
    
    //45 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 5000);
    
    //40 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 10000);
    
    //35 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 15000);
    
    //30 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 20000);
    
    //25 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 25000);
    
    //20 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 30000);
    
    //15 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 35000);
    
    //10 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 40000);
    
    //5 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + " sec"; 
    }, 45000);
    
    //0 sec display
    setTimeout(function(){
        currTime = currTime - 5; 
        console.log(currTime);
        document.getElementById("countDis").innerHTML = currTime + "Blastoff!!!!"; 
    }, 50000);
    }

function playCraps() { //function calls the program to play craps and run the following commands
    //troubleshooting playCraps() has started
    console.log("playCraps() started"); //playCraps function loads and writes to the log that the game has started

    var die1 = 0; //variable die1 is 0
    var die2 = 0; //variable die2 is 0 
    
    die1 = Math.ceil(6 * Math.random());//die1 rolls a random number between 0-6, generated from random number generator and rounds up, dropping the decimal
    die2 = Math.ceil(6 * Math.random());//die2 rolls a random number between 0-6, generated from random number generator and rounds up, dropping the decimal

    console.log(die1); //console logs random result of die 1 
    console.log(die2); //console logs random result of die 2

    document.getElementById("die1Res").innerHTML = "the result for die1 is: " + die1; //playCraps function pulls the randomized result for "die1" and posts in the HTML "die1Res" results, logging results.
    document.getElementById("die2Res").innerHTML = "the result for die2 is: " + die2; //playCraps function pulls the randomized result for "die1" and posts in the HTML "die2Res" results, logging results.

    //check if craps (7 or 11)
    var sum = die1 + die2; //variable sum is equal to die1 + die2
    if (sum == 7 || sum == 11){ //program runs and checks if condition is met if the result sum equals 7 or sum equals 11
        console.log("you lose!!!!!!"); //if met, console will log a loss and output response in the HTML "gameRes" result
        document.getElementById("gameRes").innerHTML = "You did not find victory. Please play again and WIN!"; //playCraps function pulls the sum of die1 + die2 result and logs in HTML, replacing "gameRes" with full loss phrase.
    //check for win (even doubles)
    }else if (die1 % 2 == 0 && die1 == die2){ //condition that program checks if sum of die1 and die2 result is even/doubles
        console.log("you win!!!!!!") //if prior condition isn't met and this condition is met, console will log and output a response of a win in the HTML "gameRes" result
        document.getElementById("gameRes").innerHTML = "You won!!!!"; //playCraps function pulls the sum of die1 + die2 result and if condition is met and true, logs in HTML, replacing "gameRes" with full win phrase.
    //check for tie
    }else{ //if no other result is true, program checks if this condition is met as a catch-all result. 
        console.log("You did not win or lose.") //if no prior conditions are met, console will log a response of a tie in the HTML "GameRes" result
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!";} //playCraps function pulls the sum of die1 + die2 result and logs in HTML, replacing "gameRes" with full tie phrase.

}