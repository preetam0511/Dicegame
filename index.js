var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);
console.log(randomNumber1); // Add this line to see the output

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
document.querySelector("h1").innerHTML = "Player " + (randomNumber1 > randomNumber2 ? "1" : randomNumber1 < randomNumber2 ? "2" : "Both") + " Wins!";