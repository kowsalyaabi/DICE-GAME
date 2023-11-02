//generate random no between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//changing the image source dynamically
var imageName1 = "./images/dice"+randomNumber1+ ".png";
var imageName2 = "./images/dice"+randomNumber2+ ".png";
document.querySelector(".img1").setAttribute("src", imageName1);
document.querySelector(".img2").setAttribute("src", imageName2);

//choosing the winner by randomNumbers
if(randomNumber1 > randomNumber2)
{
    document.querySelector(".container h1").innerHTML = "Player 1 wins!!!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector(".container h1").innerHTML = "Player 2 wins!!!";
}
else
{
    document.querySelector(".container h1").innerHTML = "Draw!";
}