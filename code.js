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

function playCraps() {
    //troubleshooting playCraps() has started
    console.log("playCraps() started");

    var die1 = 0; 
    var die2 = 0; 
    
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    console.log(die1);
    console.log(die2);

    document.getElementById("die1Res").innerHTML = "the result for die1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "the result for die2 is: " + die2;

    //check if craps (7 or 11)
    var sum = die1 + die2; 
    if (sum == 7 || sum == 11){
        console.log("you lose!!!!!!");
        document.getElementById("gameRes").innerHTML = "You did not find victory. Please play again and WIN!"; 
    //check for win (even doubles)
    }else if (die1 % 2 == 0 && die1 == die2){
        console.log("you win!!!!!!")
        document.getElementById("gameRes").innerHTML = "You won!!!!"; 
    //check for tie
    }else{
        console.log("You did not win or lose.")
        document.getElementById("gameRes").innerHTML = "You did not win or lose. Please play again and WIN!";}

}