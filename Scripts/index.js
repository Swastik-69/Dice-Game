var randomNumber1= Math.floor(Math.random() * 6)+1;
var imgcomb= "images/dice"+ randomNumber1+ ".png"
var game=document.querySelector(".img1");
game.setAttribute("src",imgcomb);


var randomNumber2=Math.floor(Math.random()*6)+1;
var imgcomb2= "images/dice"+ randomNumber2+ ".png";
var game2=document.querySelector(".img2");
game2.setAttribute("src",imgcomb2);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins.";        
}

else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins.";    
}

else
{
    document.querySelector("h1").innerHTML="Its a Draw. Noone Wins";    
}