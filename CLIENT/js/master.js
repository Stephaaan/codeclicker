var moneyPerSecond = 0;
window.onload = function(){
    setInterval(function(){
        //BEGINOF assembler
        moneyPerSecond = 0;
        if(assembler.level > 0){
            moneyPerSecond+=assembler.basicMoney;
        }
        //ENDOF assembler
        redraw();
        accountBalance+=moneyPerSecond;
    },1000);
}



//TODO: save, load

var accountBalance = 0;

//handle click on programmer
var code = function(){
    accountBalance+=clicker.basicMoney;
    redraw();
}
var redraw = function(){
    document.getElementById("totalMoney").innerHTML = Math.round(accountBalance*100)/100;
    document.getElementById("moneyPerSecond").innerHTML = Math.round(moneyPerSecond*100)/100;
}
var buyClicker = function(){
    if(accountBalance >= clicker.basicPrice){
        accountBalance-=clicker.basicPrice;
        clicker.upgrade();
        redraw();
    }
    else{
        alert("ya twat");
    }
}

var buyAssembler = function(){
  if (accountBalance >=assembler.basicPrice){
    accountBalance-=assembler.basicPrice;
    assembler.upgrade();
    redraw();
  }
  else{
    alert("twat ya");
  }
}
