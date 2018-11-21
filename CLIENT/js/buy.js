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
    alert("fookin bastard");
  }
}

var buyPascal = function(){
  if(accountBalance >=pascal.basicPrice){
    accountBalance-=pascal.basicPrice;
    pascal.upgrade();
    redraw();
  }
  else{
    alert("debil");
  }
}

var buyVisualBasic=function(){
  if(accountBalance>=visualBasic.basicPrice){
    accountBalance-=visualBasic.basicPrice;
    visualBasic.upgrade();
    redraw();
  }
  else{
    alert("nahui poshol");
  }
}

var buyC=function(){
  if(accountBalance>=c.basicPrice){
    accountBalance-=c.basicPrice;
    c.upgrade();
    redraw();
  }
  else {
    alert("CYKA");
  }
}

var buyCSharp=function(){
  if(accountBalance>=csharp.basicPrice){
    accountBalance-=csharp.basicPrice;
    csharp.upgrade();
    redraw();
  }
  else {
    alert("nu blyat");
  }
}

var buyJavascript=function(){
  if(accountBalance>=javascript.basicPrice){
    accountBalance-=javascript.basicPrice;
    javascript.upgrade();
    redraw();
  }
  else {
    alert("cunt");
  }
}

var buyJava=function(){
  if(accountBalance>=java.basicPrice){
    accountBalance-=java.basicPrice;
    java.upgrade();
    redraw();
  }
  else {
    alert("shithead");
  }
}

var buyPython=function(){
  if(accountBalance>=python.basicPrice){
    accountBalance-=python.basicPrice;
    python.upgrade();
    redraw();
  }
  else {
    alert("western spy");
  }
}
