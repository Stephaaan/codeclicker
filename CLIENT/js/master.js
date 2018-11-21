var moneyPerSecond = 0;
window.onload = function(){
    //assembler, pascal, visualBasic, c, c#, javascript, java, python
    setInterval(function(){
        moneyPerSecond = 0;
        if(assembler.level > 0){
            moneyPerSecond+=assembler.basicMoney;
        }
        if(pascal.level > 0){
            moneyPerSecond+=pascal.basicMoney;
        }
        if(visualBasic.level > 0){
            moneyPerSecond+=visualBasic.basicMoney;
        }
        if(c.level > 0){
            moneyPerSecond+=c.basicMoney;
        }
        if(csharp.level > 0){
            moneyPerSecond+=csharp.basicMoney;
        }
        if(javascript.level > 0){
            //crying loud
            moneyPerSecond+=javascript.basicMoney;
        }
        if(java.level > 0){
            moneyPerSecond+=java.basicMoney;
        }
        if(python.level > 0){
            moneyPerSecond+=python.basicMoney;
        }
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
