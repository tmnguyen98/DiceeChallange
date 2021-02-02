//Show the randomness of 2 dices when refresh the page

let randomNumber1 = ~~(Math.random() * 6) + 1;
let randomNumber2 = ~~(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

//Change h1 into player1 win, player2 win, or draw when there is the difference or not between 2 dices
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player2 wins";
} else {
    document.querySelector("h1").textContent = "Draw";
}