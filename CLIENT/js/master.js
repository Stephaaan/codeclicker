var moneyPerSecond = 0;
window.onload = function(){
    //load
    if(document.cookie != ""){
        accountBalance = parseFloat(readCookie("money"));
        assembler.load(parseInt(readCookie("assemblerLevel")));
        pascal.load(parseInt(readCookie("pascalLevel")));
        visualBasic.load(parseInt(readCookie("visualBasicLevel")));
        c.load(parseInt(readCookie("cLevel")));
        csharp.load(parseInt(readCookie("csharpLevel")));
        javascript.load(parseInt(readCookie("javascriptLevel")));
        java.load(parseInt(readCookie("javaLevel")));
        python.load(parseInt(readCookie("pythonLevel")));
    }
    //Save
    setInterval(function(){
        createCookie("money", accountBalance, 30);
        createCookie("clickerLevel", clicker.level, 30);
        createCookie("assemblerLevel", assembler.level, 30);
        createCookie("pascalLevel", pascal.level, 30);
        createCookie("visualBasicLevel", visualBasic.level, 30);
        createCookie("cLevel", c.level, 30);
        createCookie("csharpLevel", csharp.level, 30);
        createCookie("javascriptLevel", javascript.level, 30);
        createCookie("javaLevel", java.level, 30);
        createCookie("pythonLevel", python.level, 30);
        console.log("save");
    },60000);
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
//cookies
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
}
