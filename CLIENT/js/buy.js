document.getElementById("Buy0").onclick = function () {
    if(accountBalance >= clicker.basicPrice){
        accountBalance-=clicker.basicPrice;
        clicker.upgrade();
        redraw();
    }
    else{
        alert("not enough credits");
    }
    
    var element = document.getElementById('Buy0');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy1');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy2');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy3');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy4');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy5');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy6');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy7');
    element.classList.toggle("clicked");
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
    
    var element = document.getElementById('Buy8');
    element.classList.toggle("clicked");
}
