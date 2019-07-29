var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;
var rnumbers = [randomNumber1,randomNumber2];

for (x=0; x<2; x++){
  if (rnumbers[x] === 1){
    document.querySelectorAll("img")[x].setAttribute("src","images/dice1.png");
  }else if(rnumbers[x] === 2){
    document.querySelectorAll("img")[x].setAttribute("src","images/dice2.png");
  }else if(rnumbers[x] === 3){
    document.querySelectorAll("img")[x].setAttribute("src","images/dice3.png");
  }else if(rnumbers[x] === 4){
    document.querySelectorAll("img")[x].setAttribute("src","images/dice4.png");
  }else if(rnumbers[x] === 5){
    document.querySelectorAll("img")[x].setAttribute("src","images/dice5.png");
  }else if(rnumbers[x] === 6){
    document.querySelectorAll("img")[x].setAttribute("src","images/dice6.png");
  }
}

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player One Wins";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player Two Wins";
}else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw";
}
