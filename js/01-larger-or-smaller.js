var integer1;
var integer2;

integer1 = parseInt(window.prompt("Enter first integer:"), 10);
integer2 = parseInt(window.prompt("Enter second integer:"), 10);

if (integer1 > integer2) {
window.document.write("This is the largest integer: " + integer1); }

else if (integer2 >= integer1)
{window.document.write("This is the largest integer: " + integer2); }

else {
window.document.write("Please enter valid integers."); 
}
