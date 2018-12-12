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
    funkcia ktorá vygeneruje unikátne id
*/
var generateID = function(callback){
        //náhodne vygenerujeme ID
        var id = Math.random()*Math.random();
        /*
            vytvoríme call na API server, ktorý nám vráti response
            či sa dané id už nachádza v databáze
        */
        $.ajax({
            url:"http://itsovy.sk:1200/checkId?id="+id,
            type:"GET",
            async:true,
            //funkcia ktorá sa vykoná ak sa nám vráti odpoveď zo servera
            success:function(data){
                /*
                    ak server vráti true (našlo už také ID v databáze)
                    tak vygenerujeme znovu volaním tej istej funkcie v ktorej sme teraz
                    tento spôsob sa volá rekurzia -> http://www2.fiit.stuba.sk/DSA/materialy/Rekurzia_vysvetlenie.html
                */
                if(data.message === true){
                    generateID();
                }
                /*
                    ak je odpoveď iná ako true (logicky môže byť len false, lebo boolean)
                    tak máme id ktoré ešte nieje v databáze a zavoláme funkciu callback
                    viac -> https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
                */
                else{
                    callback(id);
                }
            },
            //funkcia ktorá sa vykoná ak sa niečo pokašle (napr ak Mišo vypne server)
            error:function(error){
                //iba vypíšeme do konzoly error
                console.log(error);
            }
        });
}
/*
    funkcia ktorá vypíše na obrazovku tabuľku top 5 hráčov
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
var printTopFive = function(){
    //deklarujeme a inicializujeme string ktorý bude uchovávať celú html tabulku
    var str = "";
    $.ajax({
        //call nas server, metoda get
        url:"http://itsovy.sk:1200/getTop",
        type:"GET",
        async:true,
        //v pripade ze nam server vrati data
        success:function(data){
            //deklarujeme a inicializujeme si premennu kde si budeme ukladat ci hrac je v top 5
            var inTopFive = false;
            //prejdeme si pole top 5 hracov (to pole nam vratil server ako data);
            for(var i = 0; i < data.length; i++){
                //ulozime si data o 1 playerovi do premennej
                var player = data[i];
                //pozrieme ci nase id sa zhoduje s id playera z top 5 (prechadzame v cykle vsetkych 5 hracov)
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
                    str+="<span style=\"color:yellow\">"+eval(i+1)+".) " + player.name + "-" + format(player.accountBalance) + "</span><br>"; //fixme -> i+1 je ako string cize 11
                    //nastavime premennu inTopFive na true;
                    inTopFive = true;
                }else{
                    //ak ten player nieje ten hrac ktory hraje tuto instanciu hry tak ho len obycajne
                    //bez farby
                    str+=i+1+".) " + player.name + "-" + format(player.accountBalance) + "<br>";
                }
                if(inTopFive){
                    /*ak je hrac v top 5 tak nemusime zobrazovat to co je pod
                      top 5 hracmi (bodky a div kde sa zobrazuje pozicia hraca v pripade ze nieje v top 5)
                    */
                    document.getElementById("others").style.display="none"
                }else{
                    //ak nieje tak zobrazime divko s tou poziciou hraca a bodkami
                    document.getElementById("others").style.display="inline-block"
                    $.ajax({
                        //call na server ktory vracia poziciu hraca v rebricku
                        url:"http://itsovy.sk:1200/getMe?id="+localStorage.getItem("id"), //fixme: pri prvom calle je to null -> este neni ulozene idcko
                        type:"GET",
                        async:true,
                        success:function(data){
                            /*
                                ulozime si poziciu hraca do premennej
                                call vrati javascriptovy objekt (mozno to prerobim na json)
                                v tvare {position:1651} (napr)
                            */
                            var position = data.position;
                            /*
                                do divka s id me vlozime span tag so zltym textom
                                kde zobrazíme pozíciu hráča
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
            document.getElementById("top5").innerHTML = str;
        },
        error:function(error){
            console.log(error);
        }
    });
}
var saveToServer = function(){
    //do premennej id vložime hodnotu id z localStorage
    var myid = localStorage.getItem("id");
    //do premennej username vlozime hodnotu z inputu
    var username = document.getElementById("username").value;
    //do premennej acc vlozime hodnotu accountBalance
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
        url:`http://itsovy.sk:1200/write?id=${myid}&name=${username}&acc=${acc}`,
        type:"GET",
        async:true,
        success:(data)=>{
            //ak nam server vrati odpoved "ok"
            if(data.message === "ok"){
                //Tak zavolame funkciu printTopFive ktora nam vypise aktualnu tabulku aj s nasou novou poziciou
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
var createAccountOnServer = function(myid){
    $.ajax({
        /*
            call na server -> použitý starý zápis stringu, nie z ES6
        */
        url:"http://itsovy.sk:1200/create?id="+myid+"&name="+document.getElementById("username").value+"&acc=0",
        type:"GET",
        async:true,
        success:(data)=>{
            //ak prisla zo servera(u) odpoved ok
            if(data.message === "ok"){
                /*
                    tak ulozime idcko ktore sme vygenerovali do localStorage
                    -> pouzivame idcka preto aby hrac nemusel mat unikatne meno
                */
                localStorage.setItem("id", myid);
                // a vypiseme tabulku top 5
                printTopFive();
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}
