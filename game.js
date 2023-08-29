
var randomnum=Math.floor(Math.random() * 100);
var guessarray=[];
var noofguesses=10;

function play() {
    var userguess=document.getElementById("guess").value;
    if(userguess <1 || userguess >100){
        alert("please enter a number between 1 to 100");
    }else{
       guessarray.push(userguess);
       noofguesses-=1;
       if(noofguesses>0 ){
       if(userguess < randomnum){
          document.getElementById("m1").innerHTML="Your guess is low.Try again!" ;
          document.getElementById("m2").innerHTML="you have  " + noofguesses + " chances";
          document.getElementById("m3").innerHTML="guessed numbers : " + guessarray;
       }else if(userguess > randomnum){
         document.getElementById("m1").innerHTML="Your guess is high.Try again!" ;
         document.getElementById("m2").innerHTML="you have  " + noofguesses + " chances"  ;
         document.getElementById("m3").innerHTML="guessed numbers : " + guessarray;
       }else if(userguess==randomnum){
         document.getElementById("butn").innerHTML="Replay";
      document.getElementById("m1").innerHTML="Congratulations ! you found it." ;
      noofguesses=0;
       var image=document.createElement("img");
        image.src="assets/cele-trans.gif";
        document.getElementById("imagecontainer1").appendChild(image);
        document.getElementById("m3").innerHTML="guessed numbers : " + guessarray;
       }
      }else{
         document.getElementById("m1").innerHTML="GAME OVER !!" ;
         document.getElementById("butn").innerHTML="Replay" ;
         document.getElementById("m2").innerHTML="you have  " + noofguesses + " chance"  ;
         document.getElementById("m3").innerHTML="guessed number is "+ randomnum;

         }
      }if(noofguesses<0){
         window.location.reload();
      }
    }