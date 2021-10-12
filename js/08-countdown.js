var x = parseInt(window.prompt("Enter number for countdown:", 10));

for(x; x >= 0; x -= 1) {
    window.document.write(x + "<br>");
}
window.document.write("Countdown!");