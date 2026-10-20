let count = 0;
count++;
function counter() {
    document.getElementById("colourBox").innerHTML = count;

    let box = document.getElementById("colourBox");
    
        if (count <= 2) {
            box.style.backgroundColor = "red";
        }
        else if (count <= 4 && count > 2) {
            box.style.backgroundColor = "blue";
        }
        else if (count <= 6 && count > 4 ) {
           box.style.backgroundColor = "yellow";
        }
        }


let answer = confirm ("Would you like to change the colour of the box?")
console.log (answer);

if (answer == true) {
    counter();
}else{
   document.getElementById("colourBox").style.display = "none";
}

