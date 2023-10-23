var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice="images/dice"+ randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDice);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice="images/dice"+ randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 2 WIN";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WIN"; 
}
else{
    document.querySelector("h1").innerHTML="DRAW";  
}
