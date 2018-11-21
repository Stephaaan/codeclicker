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

var buyPascal = function(){
  if(accountBalance >=pascal.basicPrice){
    accountBalance-=pascal.basicPrice;
    pascal.upgrade();
    redraw();
  }
  else{
    alert("twat ya");
  }
}

var buyVisualBasic=function(){
  if(accountBalance>=visualBasic.basicPrice){
    accountBalance-=visualBasic.basicPrice;
    visualBasic.upgrade();
    redraw();
  }
  else{
    alert("twat ya");
  }
}

var buyC=function(){
  if(accountBalance>=c.basicPrice){
    accountBalance-=c.basicPrice;
    c.upgrade();
    redraw();
  }
  else {
    alert("twat ya");
  }
}

var buyCSharp=function(){
  if(accountBalance>=csharp.basicPrice){
    accountBalance-=csharp.basicPrice;
    csharp.upgrade();
    redraw();
  }
  else {
    alert("heya twatya");
  }
}

var buyJavascript=function(){
  if(accountBalance>=javascript.basicPrice){
    accountBalance-=javascript.basicPrice;
    javascript.upgrade();
    redraw();
  }
  else {
    alert("heya twatya");
  }
}

var buyJava=function(){
  if(accountBalance>=java.basicPrice){
    accountBalance-=java.basicPrice;
    java.upgrade();
    redraw();
  }
  else {
    alert("heya twatya");
  }
}

var buyPython=function(){
  if(accountBalance>=python.basicPrice){
    accountBalance-=python.basicPrice;
    python.upgrade();
    redraw();
  }
  else {
    alert("heya huaahah");
  }
}
