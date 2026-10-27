let count = 0;
window.addEventListener("mousemove", function(event) {
    let cX = event.clientX;
    let cY = event.clientY;
    document.getElementById ("clientX").innerHTML = cX;
    document.getElementById ("clientY").innerHTML = cY;
    if (cX > 400 && cX < 800) {
        document.body.style.backgroundColor = "#7CA83D";
    }
    else {
        document.body.style.backgroundColor = "#688F2F"
    }
})

function counter() {
    count ++;
    document.getElementById("countValue").innerHTML = count;

    let box = document.getElementById("colourBox");
        if (count == 7) {
            box.style.backgroundColor = "#E37434";
            count = 0;
        }
        else if (count <= 2) {
            box.style.backgroundColor = "#E37434"
            
        }
        else if (count <= 4 && count > 2) {
            box.style.backgroundColor = "#4A6AD4";
        }
        else if (count > 4) {
           box.style.backgroundColor = "#DADB61";
        }
        
        }


let answer = confirm ("Would you like to change the colour of the box?")
console.log (answer);

if (answer == true) {
    counter();
}else{
   document.getElementById("boxAndCount").style.display = "none";
}

