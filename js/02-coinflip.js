var coinFlip = Math.round(Math.random());
var choice = window.prompt("Heads or Tails?");
var flip

//coin flip
if (coinFlip == 1) {
    flip = true;
    window.document.write("<h4>Thank you for using the coin flip application!</h4>");
} else if(coinFlip == 0) {
    flip = false;
    window.document.write("<h4>Thank you for using the coin flip application!</h4>");
}

//result alert
if(flip == true && choice == "Heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    }
else if(flip == true && choice == "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
    } 
else if(flip == false && choice == "Tails") {
        alert("The flip was tails and you chose tails...you win!");
    }
else if(flip == false && choice == "Heads") {
        alert("The flip was tails but you chose heads...you lose!");
    }
else {
    alert("Please enter Heads or Tails correctly!");
}

//fixed 02 coinflip script and added boolean
