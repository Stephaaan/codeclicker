//TODO: premyslieť vzorce v upgradeoch!

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
        },
        load:function(toLevel){
            for(var i = 0; i < toLevel; i++){
                this.upgrade();
            }
        }
}

var pascal = {
        level:0,
        basicMoney:1,
        addByLevel:0.5,

        basicPrice:40,
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
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

var visualBasic = {
        level:0,
        basicMoney:2,
        addByLevel:1,

        basicPrice:80,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/5;
                this.priceByLevel=this.basicPrice/5;
              }
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

var c = {
        level:0,
        basicMoney:4,
        addByLevel:2,

        basicPrice:160,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/5;
                this.priceByLevel=this.basicPrice/5;
              }
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

var csharp = {
        level:0,
        basicMoney:8,
        addByLevel:4,

        basicPrice:320,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/6;
                this.priceByLevel=this.basicPrice/6;
              }
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

var javascript = {
        level:0,
        basicMoney:16,
        addByLevel:8,

        basicPrice:640,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/6;
                this.priceByLevel=this.basicPrice/6;
              }
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

    //BEGINOF endless cry
    //TODO: just cry && pull the trigger
    //need more wipes
    //need more bullets
    //need more iron to make bullets
    //need more tools to commit suicide
    //git add suicide
    //git add belt so i can hang myself
    //git commit -m "javascript gave me deppresions"
    //that moment when you wake up in the morning
    //instead of dying in your sleep
    //a nuu cheeky breeky iv damke
    //nahui blyat
    //pizdec
    //ENDOF endless cry
var java = {
        level:0,
        basicMoney:32,
        addByLevel:16,

        basicPrice:1280,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/7;
                this.priceByLevel=this.basicPrice/7;
              }
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

var python = {
        level:0,
        basicMoney:64,
        addByLevel:32,

        basicPrice:2560,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            if(this.level != 1){
                this.basicMoney+=this.addByLevel;
                this.basicPrice+=this.priceByLevel;
                //recalculate
                this.addByLevel=this.basicMoney/7;
                this.priceByLevel=this.basicPrice/7;
              }
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          }
  }

var clicker = {
        level:1,
        basicMoney:1,
        addByLevel:0,

        basicPrice:5,
        priceByLevel:0,
        upgrade:function(){
            this.level++;

            this.addByLevel=this.basicMoney/6;
            this.priceByLevel=this.basicPrice/6;

            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
      },
      load:function(toLevel){
          for(var i = 0; i < toLevel; i++){
              this.upgrade();
          }
      }
}
//WHY LIVE
