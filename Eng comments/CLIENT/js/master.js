var moneyPerSecond = 0;
var localStorage = window.localStorage;
var accountBalance = 0;
window.onload = function(){
    /*
        inicializujeme všetky upgrade-y na defaultne hodnoty
		
		initialize all upgrades to default values
    */
    initComponents();

    if(localStorage.length != 0 && localStorage.getItem("id") != null){
        /*
            ak je niečo uložene v localStorage
            tak načítame uložený progress a vypíšeme top 5 rebríček
			
			if something is saved in the localStorage
			then we will load saved progress and print top 5 positions
        */
        loadGame();
        printTopFive();
    }else{
        /*
            ak nieje nič uložené tak vygenerujeme nové id
            a zaregistrujeme účet na serveri
            generateID ma ako parameter funkciu ktorú volá
			
			if storage is empty then we will generate new id
			and register a acount on server
			generateid has as parameter funcion which calls
        */
        generateID((myid)=>{
            createAccountOnServer(myid);
        });
    }
    /*
        každých 60 sekúnd uložíme progress na server a do saveToLocalStorage
        a takisto vypíšeme tabuľku top 5
		
		save progress every 60 seconds on server and do saveToLocalStorage
		then print top 5 positions as well
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
		
		count how much money did programmers generate each second 
		add this amount to players account
		also redraw listing of accound balance and money per seccond
    */
    setInterval(function(){
        accountBalance+=calculateMoneyPerSecond();
        redraw();
    },1000);
}


/*
    funkcia ktorá spočíta hodnoty moneyPerSecond každého upgradeu
    a výsledok vráti
	
	fuction which counts amount of money per second for each upgrade
	and returns the result
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

/*
	fuction which is called after clicking on main programer images
	after click, money will be added to accountBalance
	then accountBalance and MoneyPerSecond will be redrawn
*/
var code = function(){
    accountBalance+=clicker.basicMoney;
    redraw();
}
/*
    funkcia ktorá prekreslí div totalMoney (accountBalance)
    a div moneyPerSecond
*/

/*
	function to redraw div totalMoney (accountBalance)
	and div moneyPerSecond
*/
var redraw = function(){
    document.getElementById("totalMoney").innerHTML = format(accountBalance);
    document.getElementById("moneyPerSecond").innerHTML = format(moneyPerSecond);
}
/*
    funkcia ktorá resetne hru
*/

/*
	function which will restard the game
*/
var resetEverything = function(){
    //vyčistíme localStorage
	//cleaning localstorage
    localStorage.clear();
    //refreshneme stránku aby sa načítali defaultné hodnoty
	//refreashing webpage for purpose of loading default prices
    window.location.href = window.location.href;
}
/*
    funkcia ktorá formátuje money na formát xxx.yy milion
    (zaokrúhlené na 2 desatinné miesta)
*/

/*
	function which formats oney to format xxx.yy million
	(rounding money into 2 decimal digits)
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

/*
	function for saving progress (username, accountbalance and levels of upgrades)
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
	
	/*
		function for loading saved progress after starting a game (username, accountbalance and levels of upgrades)
	*/
var loadGame = function(){
    /*
        nastavenie vpísanej hodnoty v inpute
        localStorage.getItem(key:string);
    */ 
	/*
		loading displayed amount in input
	*/
    document.getElementById("username").value = localStorage.getItem("username");
    /*
        nastavenie accountBalance zo save-u
        1.) najvnútornejšie zátvorky - načítame hodnotu money z localStorage
        2.) zo stringu to parsujeme na float (z "1.32" urobíme 1.32 -> textový reťazec prerobíme na číslo)
        3.) hodnotu uložíme do premennej accountBalance
    */
	/*
		settings of accountbalance from save
		1.) center parenthesis - loading amount of money from localstorage
		2.) parsing amount of money from string to float (from "1.32" => 1.32 - recreating text into number value
		3.) save amount into accountBalance
	*/
    accountBalance = parseFloat(localStorage.getItem("money"));
    /*
        nastavenie levelov upgradeov zo save-u
        1.) najvnútornejšie zátvorky - načítame hodnotu money z localStorage
        2.) parsneme to na integer -> level môže byť len celé číslo
        3.) zavoláme metódu ktorú má každý upgrade -> load s argumentom level:int
    */
	/*
		setting levels of upgrades from save
		1.) center parenthesis - loading amount of money from localstorage
		2.) parsing into intiger -> level can only be a full number
		3.) call method of each upgrade -> load with argument level:int 
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
/*
	function which prints levels and prizes of upgrades on screen
	(without this function, changing prize of an upgrade needs to be done in HTML file as well, 
	with functionredraw();, object is capable of redrawing the prize itself
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
