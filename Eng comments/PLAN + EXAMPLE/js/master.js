var money = 0;
var basicMoney = 1;
window.onload = function(){
    updateScreen();
}
function updateScreen(){
    document.getElementById("moneyLabel").innerHTML = "Your money: " + money;
    document.getElementById("java").innerHTML = "Java level "+java.level + " - next upgrade: "+calculateCost(java.level, java.defaultCosts);
    document.getElementById("javascript").innerHTML = "Javascript level "+javascript.level + " - next upgrade: "+calculateCost(javascript.level, javascript.defaultCosts);
    document.getElementById("autoClicker").innerHTML = "AutoClicker level "+autoClicker.level + " - next upgrade: "+calculateCost(autoClicker.level, autoClicker.defaultCosts);
    document.getElementById("moneyPerClick").innerHTML = "Money per click: " + calculateMoneyPerClick();
}
function addMoney(){
    money += calculateMoneyPerClick();
    updateScreen();
}
function buyJavaLevel(){
    if(money >= calculateCost(java.level, java.defaultCosts)){
        money-=calculateCost(java.level, java.defaultCosts);
        java.level++;
    }
    else{
        alert("You don't have enought money");
    }
    updateScreen();
}
function buyJavascriptLevel(){
    if(money >= calculateCost(javascript.level, javascript.defaultCosts)){
        money-=calculateCost(javascript.level, javascript.defaultCosts);
        javascript.level++;
    }
    else{
        alert("You don't have enought money");
    }
    updateScreen();
}
function buyAutoClickerLevel(){
    if(money >= calculateCost(autoClicker.level, autoClicker.defaultCosts)){
        money-=calculateCost(autoClicker.level, autoClicker.defaultCosts);
        autoClicker.level++;
        if(autoClicker.level === 1){
            startAutoClicker();

        }
    }
    else{
        alert("You don't have enought money");
    }
    updateScreen();
}
function calculateMoneyPerClick(){
    var javaModifier = java.modifier;
    var javascriptModifier = 0;
    for(var i = 0; i < java.level; i++){
        javaModifier+=javaModifier;
    }
    for(var i = 0; i < javascript.level; i++){
        javascriptModifier+=javascriptModifier;
    }
    return basicMoney + (basicMoney * (javaModifier)) + (basicMoney *javascriptModifier);
}
function startAutoClicker(){
    //// TODO: zrejme sa neda zmenit time v setInterval -> vygoogliť how to do it
    console.log("autoclicker started");
    setInterval(() => {
        addMoney();
        console.log("click");
    }, calculateClickTime());
}
function calculateClickTime(){
    var delay = autoClicker.basicMilis - (autoClicker.level * autoClicker.delayPerLevel);
    if(delay < 500) delay = 500;
    return delay;
}
var java = {
    level: 0,
    modifier: 0.25,
    defaultCosts:1
}
var javascript = {
    level:0,
    modifier:1,
    defaultCosts:100
}

var autoClicker = {
    basicMilis:10000,
    level:0,
    delayPerLevel:500,
    defaultCosts:500
}
function calculateCost(level, defaultCosts){
    var price = defaultCosts
    for(var i = 0; i < level; i++){
        defaultCosts*=2;
    }
    return defaultCosts;
}
