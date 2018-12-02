//fixme -> json.decode is not a function
var moneyPerSecond = 0;
var localStorage = window.localStorage;
var accountBalance = 0;
window.onload = function(){
    //redraw all upgrades:
    //BEGINOF bad code
    clicker.redraw();
    assembler.redraw();
    pascal.redraw();
    visualBasic.redraw();
    c.redraw();
    csharp.redraw();
    javascript.redraw();
    java.redraw();
    python.redraw();
    //ENDOF bad code

    //load
    if(localStorage.length != 0 && localStorage.getItem("id") != null){
        document.getElementById("username").value = localStorage.getItem("username");
        accountBalance = parseFloat(localStorage.getItem("money"));
        clicker.load(parseInt(localStorage.getItem("clickerLevel")))
        assembler.load(parseInt(localStorage.getItem("assemblerLevel")));
        pascal.load(parseInt(localStorage.getItem("pascalLevel")));
        visualBasic.load(parseInt(localStorage.getItem("visualBasicLevel")));
        c.load(parseInt(localStorage.getItem("cLevel")));
        csharp.load(parseInt(localStorage.getItem("csharpLevel")));
        javascript.load(parseInt(localStorage.getItem("javascriptLevel")));
        java.load(parseInt(localStorage.getItem("javaLevel")));
        python.load(parseInt(localStorage.getItem("pythonLevel")));
        printTopFive();
    }else{
        generateID((myid)=>{
            console.log(myid+"-"+document.getElementById("username").value);
            $.ajax({
                url:"http://itsovy.sk:1200/create?id="+myid+"&name="+document.getElementById("username").value+"&acc=0",
                type:"GET",
                async:true,
                success:(data)=>{
                    console.log(data.message);
                    if(data.message === "ok"){
                        console.log("player created");
                        localStorage.setItem("id", myid);
                        console.log(localStorage.getItem("id"));
                        printTopFive();
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
        });
    }
    //Save
    setInterval(function(){
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
        //write on a Server
        console.log("save");
        saveToServer();
        //calling get top 5 after save in function saveToServer
    },60000);
    //assembler, pascal, visualBasic, c, c#, javascript, java, python
    setInterval(function(){
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
        redraw();
        accountBalance+=moneyPerSecond;
    },1000);
}



//TODO: save, load

var accountBalance = 0;

//handle click on programmer
var code = function(){
    accountBalance+=clicker.basicMoney;
    redraw();
}
var redraw = function(){
    document.getElementById("totalMoney").innerHTML = format(accountBalance);
    document.getElementById("moneyPerSecond").innerHTML = format(moneyPerSecond);
}
var resetEverything = function(){
    localStorage.clear();
    window.location.href = window.location.href;
}
var format = function(currency){
    if(currency >= 1000000000000){
        return Math.round(currency/10000000000)/100 + " aa";
    }
    else if(currency >= 1000000000){
        return Math.round(currency/10000000)/100 + " bilion";
    }
    else if(currency > 1000000){
        return Math.round(currency/1000)/1000 + " milion";
        console.log(toReturn);
    }else if(currency > 1000){
        return Math.round(currency);
    }else{
        return Math.round(currency*100)/100;
    }
    return "NaN";
}
var generateID = function(callback){
        var id = Math.random()*Math.random();
        $.ajax({
            url:"http://itsovy.sk:1200/checkId?id="+id,
            type:"GET",
            async:true,
            success:function(data){
                if(data.message === true){
                    generateID();
                }else{
                    console.log("ok");
                    callback(id);
                }
        },
                error:function(error){
                    console.log(error);
                }
        });
}
var printTopFive = function(){
    var str = "";
    $.ajax({
        url:"http://itsovy.sk:1200/getTop",
        type:"GET",
        async:true,
        success:function(data){
            var inTopFive = false;
            for(var i = 0; i < data.length; i++){
                var player = data[i];
                if(player.id === localStorage.getItem("id")){
                    str+="<span style=\"color:yellow\">"+eval(i+1)+".) " + player.name + "-" + format(player.accountBalance) + "</span><br>"; //fixme -> i+1 je ako string cize 11
                    inTopFive = true;
                }else{
                    str+=i+1+".) " + player.name + "-" + format(player.accountBalance) + "<br>";
                }
                if(inTopFive){
                    document.getElementById("others").style.display="none"
                }else{
                    document.getElementById("others").style.display="inline-block"
                    $.ajax({
                        url:"http://itsovy.sk:1200/getMe?id="+localStorage.getItem("id"), //fixme: pri prvom calle je to null -> este neni ulozene idcko
                        type:"GET",
                        async:true,
                        success:function(data){
                            console.log(data);
                            var position = data.position;
                            console.log( position+".) "+localStorage.getItem("username")+"-"+localStorage.getItem("money"));
                            document.getElementById("me").innerHTML = "<span style=\"color:yellow\">"+eval(position+1)+".) "+document.getElementById("username").value+"-"+format(accountBalance)+ "</span><br>";
                        }
                    });
                }
            }
            document.getElementById("top5").innerHTML = str;
            //// TODO: spracovat data
        },
        error:function(error){
            console.log(error);
        }
    });
}
var saveToServer = function(){
    var myid = localStorage.getItem("id");
    var username = document.getElementById("username").value;
    var acc = accountBalance;
//    console.log(`http://itsovy.sk:1200/write?id=${myid}&name=${username}&acc=${acc}`);
    $.ajax({
        url:`http://itsovy.sk:1200/write?id=${myid}&name=${username}&acc=${acc}`,
        type:"GET",
        async:true,
        success:(data)=>{
            console.log(data.message);
            if(data.message === "ok"){
                console.log("stats saved");
                printTopFive();
            }
        },
        error:function(error){
            console.log(error);
        }
    });
}
