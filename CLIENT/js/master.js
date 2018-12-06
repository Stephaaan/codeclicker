var moneyPerSecond = 0;
var localStorage = window.localStorage;
var accountBalance = 0;
window.onload = function(){
    /*
        inicializujeme všetky upgrade-y na defaultne hodnoty
    */
    initComponents();

    if(localStorage.length != 0 && localStorage.getItem("id") != null){
        /*
            ak je niečo uložene v localStorage
            tak načítame uložený progress a vypíšeme top 5 rebríček
        */
        loadGame();
        printTopFive();
    }else{
        /*
            ak nieje nič uložené tak vygenerujeme nové id
            a zaregistrujeme účet na serveri
            generateID ma ako parameter funkciu ktorú volá
        */
        generateID((myid)=>{
            createAccountOnServer(myid);
        });
    }
    /*
        každých 60 sekúnd uložíme progress na server a do saveToLocalStorage
        a takisto vypíšeme tabuľku top 5
    */
    setInterval(function(){
        saveToServer();
        saveToLocalStorage();
        printTopFive();
    },60000);

    /*
        každú sekundu vypočítame koľko programátori vygenerovali money
        a to pripočítame k hráčovmu accountu
        takisto prekreslime výpis account balance a money per second
    */
    setInterval(function(){
        accountBalance+=calculateMoneyPerSecond();
        redraw();
    },1000);
}


/*
    funkcia ktorá spočíta hodnoty moneyPerSecond každého upgradeu
    a výsledok vráti
*/
var calculateMoneyPerSecond = function(){
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
    return moneyPerSecond;
}
/*
    funkcia ktorá sa volá po kliknutí na programátora
    pridá k accountBalance money za klik
    a prekreslí accountBalance a moneyPerSecond
*/
var code = function(){
    accountBalance+=clicker.basicMoney;
    redraw();
}
/*
    funkcia ktorá prekreslí div totalMoney (accountBalance)
    a div moneyPerSecond +disablne kupu ak nie je dost currency a prekresli programatorov
*/
var redraw = function(){
    document.getElementById("totalMoney").innerHTML = format(accountBalance);
    document.getElementById("moneyPerSecond").innerHTML = format(moneyPerSecond);

    document.getElementById("Buy0").className = accountBalance >= clicker.basicPrice ? "" : "disabled";
    document.getElementById("Buy1").className = accountBalance >= assembler.basicPrice ? "" : "disabled";
    document.getElementById("Buy2").className = accountBalance >= pascal.basicPrice ? "" : "disabled";
    document.getElementById("Buy3").className = accountBalance >= visualBasic.basicPrice ? "" : "disabled";
    document.getElementById("Buy4").className = accountBalance >= c.basicPrice ? "" : "disabled";
    document.getElementById("Buy5").className = accountBalance >= csharp.basicPrice ? "" : "disabled";
    document.getElementById("Buy6").className = accountBalance >= javascript.basicPrice ? "" : "disabled";
    document.getElementById("Buy7").className = accountBalance >= java.basicPrice ? "" : "disabled";
    document.getElementById("Buy8").className = accountBalance >= python.basicPrice ? "" : "disabled";
    workers();
}
/*
    funkcia ktorá resetne hru
*/
var resetEverything = function(){
    //vyčistíme localStorage
    localStorage.clear();
    //refreshneme stránku aby sa načítali defaultné hodnoty
    window.location.href = window.location.href;
}
/*
    funkcia ktorá formátuje money na formát xxx.yy milion
    (zaokrúhlené na 2 desatinné miesta)
*/
var format = function(currency){
    if(currency >= 1000000000000000000){
        return Math.round(currency/10000000000000000)/100 + " cc";
    }
    else if(currency >= 1000000000000000){
        return Math.round(currency/10000000000000)/100 + " bb";
    }
    else if(currency >= 1000000000000){
        return Math.round(currency/10000000000)/100 + " aa";
    }
    else if(currency >= 1000000000){
        return Math.round(currency/10000000)/100 + " bilion";
    }
    else if(currency > 1000000){
        return Math.round(currency/1000)/1000 + " milion";
    }else if(currency > 1000){
        return Math.round(currency);
    }else{
        return Math.round(currency*100)/100;
    }
    return "NaN";
}
/*
    funkcia ktorá ukladá progres (username, accountbalance a levely upgradeov)
*/
var saveToLocalStorage = function(){
    /*
        localStorage.setItem(key:string, value);
    */
    localStorage.setItem("money", accountBalance);
    localStorage.setItem("clickerLevel", clicker.level);
    localStorage.setItem("assemblerLevel", assembler.level);
    localStorage.setItem("pascalLevel", pascal.level);
    localStorage.setItem("visualBasicLevel", visualBasic.level);
    localStorage.setItem("cLevel", c.level);
    localStorage.setItem("csharpLevel", csharp.level);
    localStorage.setItem("javascriptLevel", javascript.level);
    localStorage.setItem("javaLevel", java.level);
    localStorage.setItem("pythonLevel", python.level);
    localStorage.setItem("username", document.getElementById("username").value);
}
    /*
        funkcia pre načítanie uloženého progressu pri spustení hry (username, accountbalance a levely upgradeov)
    */
var loadGame = function(){
    /*
        nastavenie vpísanej hodnoty v inpute
        localStorage.getItem(key:string);
    */
    document.getElementById("username").value = localStorage.getItem("username");
    /*
        nastavenie accountBalance zo save-u
        1.) najvnútornejšie zátvorky - načítame hodnotu money z localStorage
        2.) zo stringu to parsujeme na float (z "1.32" urobíme 1.32 -> textový reťazec prerobíme na číslo)
        3.) hodnotu uložíme do premennej accountBalance
    */
    accountBalance = parseFloat(localStorage.getItem("money"));
    /*
        nastavenie levelov upgradeov zo save-u
        1.) najvnútornejšie zátvorky - načítame hodnotu money z localStorage
        2.) parsneme to na integer -> level môže byť len celé číslo
        3.) zavoláme metódu ktorú má každý upgrade -> load s argumentom level:int
    */
    clicker.load(parseInt(localStorage.getItem("clickerLevel")))
    assembler.load(parseInt(localStorage.getItem("assemblerLevel")));
    pascal.load(parseInt(localStorage.getItem("pascalLevel")));
    visualBasic.load(parseInt(localStorage.getItem("visualBasicLevel")));
    c.load(parseInt(localStorage.getItem("cLevel")));
    csharp.load(parseInt(localStorage.getItem("csharpLevel")));
    javascript.load(parseInt(localStorage.getItem("javascriptLevel")));
    java.load(parseInt(localStorage.getItem("javaLevel")));
    python.load(parseInt(localStorage.getItem("pythonLevel")));
}
/*
    funkcia ktorá vykreslí na obrazovku levely a ceny upgradeov
    (ak by sme túto funkciu nemali tak ak by sme zmenili cenu nejakeho upgradeu
     tak by sme museli tú cenu prepísať aj v html, teraz nemusíme, objekt si tú
     cenu prekreslí sám pomocou metódy redraw();
    )
*/
var initComponents = function(){
    clicker.redraw();
    assembler.redraw();
    pascal.redraw();
    visualBasic.redraw();
    c.redraw();
    csharp.redraw();
    javascript.redraw();
    java.redraw();
    python.redraw();
}
/*
    prida sa programator ak je kupeny dany language na 1 a 2
*/
var workers = function(){
  if(assembler.level > 0){
    document.getElementById("Room1").innerHTML="<img src='gfx/worker1.png' id='worker1'>";
  }
  if(pascal.level > 0){
    document.getElementById("Room2").innerHTML="<img src='gfx/worker2.png' id='worker2'>";
  }
  if(visualBasic.level > 0){
    document.getElementById("Room3").innerHTML="<img src='gfx/worker3.png' id='worker3'>";
  }
  if(c.level > 0){
    document.getElementById("Room4").innerHTML="<img src='gfx/worker4.png' id='worker4'>";
  }
  if(csharp.level > 0){
    document.getElementById("Room5").innerHTML="<img src='gfx/worker5.png' id='worker5'>";
  }
  if(javascript.level > 0){
    document.getElementById("Room6").innerHTML="<img src='gfx/worker6.png' id='worker6'>";
  }
  if(java.level > 0){
    document.getElementById("Room7").innerHTML="<img src='gfx/worker7.png' id='worker7'>";
  }
  if(python.level > 0){
    document.getElementById("Room8").innerHTML="<img src='gfx/worker8.png' id='worker8'>";
  }
  if(assembler.level > 1){
    document.getElementById("Room1").innerHTML+="<img src='gfx/worker8.png' id='worker8'/>";
  }
  if(pascal.level > 1){
    document.getElementById("Room2").innerHTML+="<img src='gfx/worker7.png' id='worker7'>";
  }
  if(visualBasic.level > 1){
    document.getElementById("Room3").innerHTML+="<img src='gfx/worker6a.png' id='worker6a'>";
  }
  if(c.level > 1){
    document.getElementById("Room4").innerHTML+="<img src='gfx/worker5.png' id='worker5'>";
  }
  if(csharp.level > 1){
    document.getElementById("Room5").innerHTML+="<img src='gfx/worker4.png' id='worker4'>";
  }
  if(javascript.level > 1){
    document.getElementById("Room6").innerHTML+="<img src='gfx/worker3.png' id='worker3'>";
  }
  if(java.level > 1){
    document.getElementById("Room7").innerHTML+="<img src='gfx/worker2.png' id='worker2'>";
  }
  if(python.level > 1){
    document.getElementById("Room8").innerHTML+="<img src='gfx/worker1.png' id='worker1'>";
  }
}
