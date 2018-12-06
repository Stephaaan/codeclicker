document.getElementById("Buy0").onclick = function () {
    if(accountBalance >= clicker.basicPrice){
        accountBalance-=clicker.basicPrice;
        clicker.upgrade();
        redraw();
    }
    else{
        alert("not enough credits");
    }
}

document.getElementById("Buy1").onclick = function () {
  if (accountBalance >=assembler.basicPrice){
    accountBalance-=assembler.basicPrice;
    assembler.upgrade();
    redraw();
  }
  else{
      alert("not enough credits");
  }
}

document.getElementById("Buy2").onclick = function () {
  if(accountBalance >=pascal.basicPrice){
    accountBalance-=pascal.basicPrice;
    pascal.upgrade();
    redraw();
  }
  else{
      alert("not enough credits");
  }
}

document.getElementById("Buy3").onclick = function () {
  if(accountBalance>=visualBasic.basicPrice){
    accountBalance-=visualBasic.basicPrice;
    visualBasic.upgrade();
    redraw();
  }
  else{
      alert("not enough credits");
  }
}

document.getElementById("Buy4").onclick = function () {
  if(accountBalance>=c.basicPrice){
    accountBalance-=c.basicPrice;
    c.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}

document.getElementById("Buy5").onclick = function () {
  if(accountBalance>=csharp.basicPrice){
    accountBalance-=csharp.basicPrice;
    csharp.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}

document.getElementById("Buy6").onclick = function () {
  if(accountBalance>=javascript.basicPrice){
    accountBalance-=javascript.basicPrice;
    javascript.upgrade();
    redraw();
  }
  else {
      alert("not enough credits, good for you");
  }
}

document.getElementById("Buy7").onclick = function () {
  if(accountBalance>=java.basicPrice){
    accountBalance-=java.basicPrice;
    java.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}

document.getElementById("Buy8").onclick = function () {
  if(accountBalance>=python.basicPrice){
    accountBalance-=python.basicPrice;
    python.upgrade();
    redraw();
  }
  else {
      alert("not enough credits");
  }
}
