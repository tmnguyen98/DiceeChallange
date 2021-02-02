let randomNumber1 = ~~(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");