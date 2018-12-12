var buyClicker = function(){
    if(accountBalance >= clicker.basicPrice){
        accountBalance-=clicker.basicPrice;
        clicker.upgrade();
        redraw();
    }
    else{
        alert("not enough credits");
    }
}

var buyAssembler = function(){
  if (accountBalance >=assembler.basicPrice){
    accountBalance-=assembler.basicPrice;
    assembler.upgrade();
    redraw();
  }
  else{
      alert("not enough credits");
  }
}

var buyPascal = function(){
  if(accountBalance >=pascal.basicPrice){
    accountBalance-=pascal.basicPrice;
    pascal.upgrade();
    redraw();
  }
  else{
      alert("not enough credits");
  }
}

var buyVisualBasic=function(){
  if(accountBalance>=visualBasic.basicPrice){
    accountBalance-=visualBasic.basicPrice;
    visualBasic.upgrade();
    redraw();
  }
  else{
      alert("not enough credits");
  }
}

var buyC=function(){
  if(accountBalance>=c.basicPrice){
    accountBalance-=c.basicPrice;
    c.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}

var buyCSharp=function(){
  if(accountBalance>=csharp.basicPrice){
    accountBalance-=csharp.basicPrice;
    csharp.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}

var buyJavascript=function(){
  if(accountBalance>=javascript.basicPrice){
    accountBalance-=javascript.basicPrice;
    javascript.upgrade();
    redraw();
  }
  else {
      alert("not enough credits, good for you");
  }
}

var buyJava=function(){
  if(accountBalance>=java.basicPrice){
    accountBalance-=java.basicPrice;
    java.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}

var buyPython=function(){
  if(accountBalance>=python.basicPrice){
    accountBalance-=python.basicPrice;
    python.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}
