function calculate(){

 // home win odds

 var v = document.getElementById("code2").value;
 var w = document.getElementById("code5").value;
 var x = document.getElementById("code8").value;
 var y = document.getElementById("code11").value;

 // odds for a draw game

 var x5 = document.getElementById("code1").value;
 var x6 = document.getElementById("code4").value;
 var x7 = document.getElementById("code7").value;
 var x8 = document.getElementById("code10").value;
 
// odds for away wins

var x9 = document.getElementById("code3").value;
var x10 = document.getElementById("code6").value;
var x11 = document.getElementById("code9").value;
var x12 = document.getElementById("code12").value;

// amount to invest

var investment = document.getElementById("putting").value;

// selecting the highest odds from each bookmaker

var home = (Math.max(v,w,x,y));

var draw =(Math.max(x5,x6,x7,x8));

var away =(Math.max(x9,x10,x11,x12));


//  testing the arbitrage intensity 


  var p1 = ((1/home)*100);

  var p2 = ((1/draw)*100);
  
  var p3 =((1/away)*100);
  
  var p = (p1+p2+p3);
var n = p.toFixed(1)

// how much to place on each outcome 


var amount1 = ((p1/p)*investment);
var a1 = amount1.toFixed(1)
var amount2 = ((p2/p)*investment);
var a2 = amount2.toFixed(1)
var amount3 = ((p3/p)*investment);
var a3 = amount3.toFixed(1)


//  the payout for each indipendent outcome  


var payout1 = (a1*home)
var payout2 = (a2*draw)
var payout3 = (a3*away)

var total_final = (amount1 + amount2 + amount3);


// print out of were to place bets 


document.getElementById("text").innerHTML = "place your bet for home win on the odds of" + " " + (home);
document.getElementById("text1").innerHTML = "place your bet for draw on the odds of" + " " + (draw);
document.getElementById("text2").innerHTML = "place your bet for away win on the odds of" + " " + (away);


// print out of how much you can place for a particular outcome


document.getElementById("money").innerHTML = "place" + " " + "K" + (a1)+ "on the odds for home win";
document.getElementById("money1").innerHTML = "place" + " " + "K" + (a2)+ "on the odds for draw";
document.getElementById("money2").innerHTML = "place" + " " + "K" + (a3)+ "on the odds for away win";


// print out of the payout for each outcome 


document.getElementById("money").innerHTML = "place" + " " + "K" + (a1)+ "on the odds for home win";
document.getElementById("money1").innerHTML = "place" + " " + "K" + (a2)+ "on the odds for draw";
document.getElementById("money2").innerHTML = "place" + " " + "K" + (a3)+ "on the odds for away win";

// print out of the payout of each independent outcome 

document.getElementById("home_payout").innerHTML = "this is the amount you get for home win"+ " " + "=" + " " + "K" + (payout1);
document.getElementById("draw_payout").innerHTML = "this is the amount you get for a draw game" + " " + "=" + " " + "K" + (payout2);
document.getElementById("away_payout").innerHTML = "this is the amount you get for away win" + " " + "=" + " " + "K" + (payout3);


// total expenditure 

document.getElementById("expenditure").innerHTML = "this is the total amount of money you invest is" + "=" + (total_final);

// profit intensity

if ( n <= 105){

document.getElementById("intesity").innerHTML = "The profit intesity is" + " " + "=" + " "+ (n)+"%";

}

 if (n > 105){
document.getElementById("intesity2").innerHTML = "The profit intesity is" + " " + "=" + " "+ (n)+"%";
 }

}





































































