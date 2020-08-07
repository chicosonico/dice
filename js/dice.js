
function playDice(){
  
  
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Get number player 1

var randomImageUrl1 = "images/dice-" + randomNumber1 + ".svg"; //build the image source url player 1

// post the attribute on the dom
// document.querySelectorAll("img")[0].setAttribute("src", randomImageUrl1); // vanilla Javascript

// jQuery animated fades change de dice 1 image
$("#img1").fadeOut(function() {
    $(this).attr("src",randomImageUrl1).fadeIn();
  });


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Get number player 2

var randomImageUrl2 = "images/dice-" + randomNumber2 + ".svg"; //build the image source url player 2

// post the attribute on the dom
// document.querySelectorAll("img")[1].setAttribute("src", randomImageUrl2); // vanilla Javascript


// jQuery animated fades change de dice 2 image
$("#img2").fadeOut(function() {
    $(this).attr("src",randomImageUrl2).fadeIn();
  });


//play de dice - compare dices


if (randomNumber1 > randomNumber2){
    textWin = "Player 1 wins!";

}else if(randomNumber1 == randomNumber2){
    textWin = "Deuce";
}else{
    textWin = "Player 2 wins!"
}

// post the winner text on the dom
// document.getElementById("textWin").innerHTML = textWin; //vanilla Javascript

// $("#textWin").text(textWin); // jQuery

// jQuery animated fades change de dice 2 image
$("#textWin").fadeOut(function() {
    $(this).text(textWin).fadeIn();
  });



 
};


