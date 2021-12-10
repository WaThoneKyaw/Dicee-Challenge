var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //random 1 to 6

var randomDieImage = "dice" + randomNumber1 + ".png";//dice 1 to 6 png

var randomImageSource = "images/" + randomDieImage;//images/dice1 to images/die6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src"  , randomImageSource);



// image 2

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



//if player 1 win
if (randomNumber1  > randomNumber2 )
{

  document.querySelector("h1").innerHTML =("💯Player 1 win!");


}else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML =("😎Player 2 win!");
}
else {
  document.querySelector("h1").innerHTML =(" 😋Draw");
}
