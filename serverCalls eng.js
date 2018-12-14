/*
    SPOSOBY VYTVARANIA FUNKCII V JAVASCRIPTE
    (take co su tu pouzite resp ich najcastejsie pouzivam)
    1.) function name(){
            //some code
        }
    2.) var functionName = function(){
            //some code
        }
    --------------------------------------------
    v pripade ze chceme vytvorit funkciu s menom a chceme ju volat
        var menoFunkcie = (argument-y) => {}
    3a.) var a = () => {
            //some code
        }
    v pripade ze vytvarame funkciu ako argument nejakej inej funkcie-> tzv anonymna funkcia
    napr v setTimeout
    1.) setTimeout(function(){

        }, 1000);
    2.) setTimeout(()=>{

        }, 1000);
*/

/*
	Ways to create functions in JAVASCRIPT
	(Those that are used the most)
	1.) Function Name() {
			//some code
        }
    2.) var functionName = function(){
            //some code
        }
    --------------------------------------------
	in case that we want to create function with name and call it
		var nameOfFunction = (argument-s) => {}
	3a.) var a = () => {
            //some code
        }
	in case that we want to create a function as an argument for another function-> so called: anonymous function
	e.g. in setTimeout
    1.) setTimeout(function(){

        }, 1000);
    2.) setTimeout(()=>{

        }, 1000);
*/

/*
    funkcia ktorá vygeneruje unikátne id
*/
/*
    function to generate unique id
*/
var generateID = function(callback){
        //náhodne vygenerujeme ID
		//randomly generate ID
        var id = Math.random()*Math.random();
        /*
            vytvoríme call na API server, ktorý nám vráti response
            či sa dané id už nachádza v databáze
        */
		/*
            we will create a call for API server, which will return responce,
			if the current id is already in the database
        */
        $.ajax({
            url:"http://itsovy.sk:1200/checkId?id="+id,
            type:"GET",
            async:true,
            //funkcia ktorá sa vykoná ak sa nám vráti odpoveď zo servera
			//function which performs when responce from server arrives
            success:function(data){
                /*
                    ak server vráti true (našlo už také ID v databáze)
                    tak vygenerujeme znovu volaním tej istej funkcie v ktorej sme teraz
                    tento spôsob sa volá rekurzia -> http://www2.fiit.stuba.sk/DSA/materialy/Rekurzia_vysvetlenie.html
                */
				/*
					if server returns true (Id is already in the database)
					then we will generate new id by calling the same function
					this method is called: recursion -> http://www2.fiit.stuba.sk/DSA/materialy/Rekurzia_vysvetlenie.html
				*/
                if(data.message === true){
                    generateID();
                }
                /*
                    ak je odpoveď iná ako true (logicky môže byť len false, lebo boolean)
                    tak máme id ktoré ešte nieje v databáze a zavoláme funkciu callback
                    viac -> https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
                */
				/*
					if the answer is different than true (logically could only be false, because boolean)
					then we have id which is not in the database yet. we will call function callback
					more -> https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
				*/
                else{
                    callback(id);
                }
            },
            //funkcia ktorá sa vykoná ak sa niečo pokašle (napr ak Mišo vypne server)
			//function which performs when something goes wrong (Michal has shot down the server)
            error:function(error){
                //iba vypíšeme do konzoly error
				//just prints error in console
                console.log(error);
            }
        });
}
/*
    funkcia ktorá vypíše na obrazovku tabuľku top 5 hráčov
*/
/*
    function which prints on display table with top 5 players
*/


/*
    STRUKTURA TABULKY
    -----------------------
    1) meno - accountbalance
    2) meno - accountbalance
    3) meno - accountbalance
    4) meno - accountbalance
    5) meno - accountbalance
            ...             //tri bodky len tak ze ked je napr 15 zeby vedel ze su pred nim hraci
    15) playerName - accountBalance //hrac
            ...             //tri bodky aby hrac vedel ze je aj niekto horsi (aj ked ten hraca
                            //je posledny tak to zobrazime aby nemal depky)

*/
/*
	TABLE STRUCTURE
	-----------------------
    1) meno - accountbalance
    2) meno - accountbalance
    3) meno - accountbalance
    4) meno - accountbalance
    5) meno - accountbalance
	        ...             //three dots to indicade presence of other players on positions between him and top 5 (if he is on position 7 and below)
	7) playerName - accountBalance //player
            ...             //three dots to indicade players on positions below him (worse players)
                            //this three dots are shown even when player is on the lowest position (they give him some comfort that others are worse 
							//even though he is the worst :D ) 
*/
var printTopFive = function(){
    //deklarujeme a inicializujeme string ktorý bude uchovávať celú html tabulku
	//declare and initialize string which will save the entire HTML table
    var str = "";
    $.ajax({
        //call nas server, metoda get
		//call for our server, Get method
        url:"http://itsovy.sk:1200/getTop",
        type:"GET",
        async:true,
        //v pripade ze nam server vrati data
		//in case that server returns data to us
        success:function(data){
            //deklarujeme a inicializujeme si premennu kde si budeme ukladat ci hrac je v top 5
			//declare and initialize a variable to store information about position of player (is he in top 5)
            var inTopFive = false;
            //prejdeme si pole top 5 hracov (to pole nam vratil server ako data);
			//analyze array of top 5 plaers (array was returned by server as data);
            for(var i = 0; i < data.length; i++){
                //ulozime si data o 1 playerovi do premennej
				//save data about 1 player into variable
                var player = data[i];
                //pozrieme ci nase id sa zhoduje s id playera z top 5 (prechadzame v cykle vsetkych 5 hracov)
				//analyze if our id is matched with id from top 5 (pass all 5 players in cycle)
                if(player.id === localStorage.getItem("id")){
                    /*
                        ak ano tak do tej vyslednej tabulky dame span (divko len jednoriadkove)
                        ktory bude mat farbu textu zltu a budu tam udaje hraca (hrac sa zobrazuje
                        v tabulke zltou farbou)
                        -> funkcia eval():
                            pole sa cisluje od 0 cize ak chceme vykreslit tu tabulku a ak by sme dali len i
                            tak by to bolo cislovanie 0,1,2,3,4 cize preto i+1, avsak kedze uz predtym mame
                            nejaky textovy retazec do ktoreho to chceme pridat tak javascript by neurobil
                            napr 0+1 ze sa rovna 1 ale by urobil ze sa to rovna 01 (by to spojil ako 2
                            textove retazce). preto volame funkciu eval ktora nam vrati vysledok matematickej
                            operacie ktoru dostane ako argument
                    */
					/*
                        if yes, then we will implement span into final table (one-row div)
                        color of text will be yellow, containing information about player 
						(player is displayed by yellow color)
                        -> function eval():
                            array is numbered from 0, if we want to print a table with just i
                            then the table would be numbered 0,1,2,3,4 therefore i+1, but because we have some text before the number
                            to which we want it to implement, javascript won't perform 0+1=1 but 01
                            (connecting them as two strings)
                            that is why we call function eval which will return result of mathematical operation
                            whom we get as an argument
                    */
                    str+="<span style=\"color:yellow\">"+eval(i+1)+".) " + player.name + "-" + format(player.accountBalance) + "</span><br>"; //fixme -> i+1 je ako string cize 11
                    //nastavime premennu inTopFive na true;
					//setting variable inTopFive as true;
                    inTopFive = true;
                }else{
                    //ak ten player nieje ten hrac ktory hraje tuto instanciu hry tak ho len obycajne
                    //bez farby
					//if the player in table isn't playing on this device (other players in table)
					//he is displayed by white color
                    str+=i+1+".) " + player.name + "-" + format(player.accountBalance) + "<br>";
                }
                if(inTopFive){
                    /*
					  ak je hrac v top 5 tak nemusime zobrazovat to co je pod
                      top 5 hracmi (bodky a div kde sa zobrazuje pozicia hraca v pripade ze nieje v top 5)
                    */
					/*
					  if the player is in top 5 positions, other positions belov 5 will hide
                      (dots and div under top 5 are not shown if the plaer is in top 5)
                    */
                    document.getElementById("others").style.display="none"
                }else{
                    //ak nieje tak zobrazime divko s tou poziciou hraca a bodkami
					//if it's not then we will display div with position of player with dots 
                    document.getElementById("others").style.display="inline-block"
                    $.ajax({
                        //call na server ktory vracia poziciu hraca v rebricku
						//call on server whitch returns position of player in chart
                        url:"http://itsovy.sk:1200/getMe?id="+localStorage.getItem("id"), //fixme: pri prvom calle je to null -> este neni ulozene idcko
                        type:"GET",														  //fixme: after first call it is NULL -> id is not yet saved
                        async:true,
                        success:function(data){
                            /*
                                ulozime si poziciu hraca do premennej
                                call vrati javascriptovy objekt (mozno to prerobim na json)
                                v tvare {position:1651} (napr)
                            */
							/*
                                save position of player into variable
                                call will return javascript object (perhaps change into Json file)
                                example: {position:1651}
                            */
                            var position = data.position;
                            /*
                                do divka s id me vlozime span tag so zltym textom
                                kde zobrazíme pozíciu hráča
                            */
							/*
                                implement yellow texted span tag into div with id me
                                where position of player will be displayed
                            */
                            document.getElementById("me").innerHTML = "<span style=\"color:yellow\">"+eval(position+1)+".) "+document.getElementById("username").value+"-"+format(accountBalance)+ "</span><br>";
                        }
                    });
                }
            }
            /*
                celu vytvorenu tabulku vlozime do divka top5
                TODO: maybe prerobit na jquery ale nechce sa mi do toho :D
            */
			/*
                insert entire table into div top 5
                TODO: maybe remake into jquery but im quite a lazy boy :D
            */
            document.getElementById("top5").innerHTML = str;
        },
        error:function(error){
            console.log(error);
        }
    });
}
var saveToServer = function(){
    //do premennej id vložime hodnotu id z localStorage
	//insert id value from localStorage into id variable
    var myid = localStorage.getItem("id");
    //do premennej username vlozime hodnotu z inputu
	//insert value from input into username variable
    var username = document.getElementById("username").value;
    //do premennej acc vlozime hodnotu accountBalance
	//insert value accountBalance into acc variable
    var acc = accountBalance;
    $.ajax({
        /*
            url na server
            ------------------
            ES6 zápis stringu
            ------------------
            namiesto toho aby sme string dali do normalnych uvodzoviek - ""
            ho dame do tychto - ``
            tym padom nemusime premenne davat do stringu cez + (i+".) " + playerName + "-" + account)
            ale mozeme ich pisat takto: `${i}.) ${playername} - ${account}`
            je to prehladnejsie hlavne pri dlhsom stringu kde je viac textu- napr v tejto url
            !!! ES6 nemusia všetky prehliadače plne podporovať
        */
		/*
            url for server
            ------------------
            ES6 zápis stringu
            ------------------
            instead of writing string into normal quotation marks - ""
            we use these - ``
            now we do not need to put variables into string though + (i+".) " + playerName + "-" + account)
            we can simply write them as: `${i}.) ${playername} - ${account}`
            it is more clear especially if the string is longer with more text- e.g. in this url
            !!! not all browsers have to fully support  ES6 !!!
        */
        url:`http://itsovy.sk:1200/write?id=${myid}&name=${username}&acc=${acc}`,
        type:"GET",
        async:true,
        success:(data)=>{
            //ak nam server vrati odpoved "ok"
			//if server returns answer "ok"
            if(data.message === "ok"){
                //Tak zavolame funkciu printTopFive ktora nam vypise aktualnu tabulku aj s nasou novou poziciou
				//call function printTopFive which will print our actual table with our new position
                printTopFive();
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}
/*
    funkcia na vytvorenie záznamu o hráčovi na serveri
*/
/*
    function for creating record of player on server
*/
var createAccountOnServer = function(myid){
    $.ajax({
        /*
            call na server -> použitý starý zápis stringu, nie z ES6
        */
		/*
            call for server -> used old writing of string, not from ES6
        */
        url:"http://itsovy.sk:1200/create?id="+myid+"&name="+document.getElementById("username").value+"&acc=0",
        type:"GET",
        async:true,
        success:(data)=>{
            //ak prisla zo servera(u) odpoved ok
			//if the nswer from server is "ok"
            if(data.message === "ok"){
                /*
                    tak ulozime idcko ktore sme vygenerovali do localStorage
                    -> pouzivame idcka preto aby hrac nemusel mat unikatne meno
                */
				/*
                    then save into localStorage our generated id
                    -> using ids so the player doesn't need to have a unique name
                */
                localStorage.setItem("id", myid);
                // a vypiseme tabulku top 5
				// and print table top 5
                printTopFive();
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}
