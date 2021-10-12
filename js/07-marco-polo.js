var x;
for(x = 1; x <= 100; x +=1) {
    for(x = 1; x <= 100; x += 1) {
        if(x % 3 == 0 && x % 5 == 0) {
            window.document.write("Marco Polo!<br>");
        }
        else if(x % 5 == 0) {
            window.document.write("Polo!<br>");
        }
        else if(x % 3 == 0) {
            window.document.write("Marco!<br>");
        }
    }
}