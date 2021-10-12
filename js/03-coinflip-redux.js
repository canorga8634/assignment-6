var coinFlip;
var x;

for (x = 1; x <= 10; x += 1) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        window.document.write("Heads" + "<br>");
    }
    else {
        window.document.write("Tails" + "<br>");
    }
}
