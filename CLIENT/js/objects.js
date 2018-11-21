
var assembler = {
        level:0,
        basicMoney:0.5,
        addByLevel:0.125,

        basicPrice:20,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/4;
                this.priceByLevel=this.basicPrice/4;
            }
        }
}
var pascal = {
        level:0,
        basicMoney:1,
}
var visualBasic = {
        level:0,
        basicMoney:1,
}
var c = {

}
var csharp = {

}
//BEGINOF endless cry
var javascript = {
    //TODO: just cry && pull the trigger
    //need more wipes
    //need more bullets
    //need more iron to make bullets
    //need more tools to commit suicide
    //git add suicide
    //git commit -m "javascript gave me deppresions"

}

var java = {

}

var python = {

}

//ENDOF endless cry
var clicker = {
        level:1,
        basicMoney:1,
        addByLevel:0.16,

        basicPrice:5,
        priceByLevel:0.83,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/6;
            this.priceByLevel=this.basicPrice/6;
        },

}

//that moment when you wake up in the morning
//instead of dying in your sleep
