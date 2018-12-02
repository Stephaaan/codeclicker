//// TODO: premyslieť vzorce v upgradeoch!
//// TODO: upravit v html zakladne ceny
/*
    opravene: -> vykreslovanie ceny a levelu objektu presunute do samostatnej funkcie redraw()
              -> pri spusteni hry sa vola tato funkcia na kazdom objekte, aby si sam vykreslil defaultne hodnoty
              -> vyhoda: ak editneme napr basicPrice tak sa nam to automaticky prekresli aj do html, nemusime prepisovať aj v htmlku
*/
var basicMoneySplitter = 4;
var basicPriceSplitter = 4;
var assembler = {
        level:0,
        basicMoney:0.5,
        addByLevel:0.125,

        basicPrice:20,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;

            this.redraw();
        },
        load:function(toLevel){
            for(var i = 0; i < toLevel; i++){
                this.upgrade();
            }
        },
        redraw:function(){
            document.getElementById("levelAssembler").innerHTML = this.level;
            document.getElementById("priceAssembler").innerHTML = format(this.basicPrice);
        }
}

var pascal = {
        level:0,
        basicMoney:1,
        addByLevel:0.5,

        basicPrice:80,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw();
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          },
          redraw:function(){
              document.getElementById("levelPascal").innerHTML = this.level;
              document.getElementById("pricePascal").innerHTML = format(this.basicPrice);
          }

  }

var visualBasic = {
        level:0,
        basicMoney:2,
        addByLevel:1,

        basicPrice:320,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw();
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          },
          redraw:function(){
              document.getElementById("levelVisualBasic").innerHTML = this.level;
              document.getElementById("priceVisualBasic").innerHTML = format(this.basicPrice);
          }
  }

var c = {
        level:0,
        basicMoney:4,
        addByLevel:2,

        basicPrice:1280,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw();
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          },
          redraw:function(){
              document.getElementById("levelC").innerHTML = this.level;
              document.getElementById("priceC").innerHTML = format(this.basicPrice);
          }

  }

var csharp = {
        level:0,
        basicMoney:8,
        addByLevel:4,

        basicPrice:5120,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw();
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          },
          redraw:function(){
              document.getElementById("levelCSharp").innerHTML = this.level;
              document.getElementById("priceCSharp").innerHTML = format(this.basicPrice);
          }
  }

var javascript = {
        level:0,
        basicMoney:16,
        addByLevel:8,

        basicPrice:20480,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw();
          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          },
          redraw:function(){
              document.getElementById("levelJavascript").innerHTML = this.level;
              document.getElementById("priceJavascript").innerHTML = format(this.basicPrice);
          }
  }

var java = {
        level:0,
        basicMoney:32,
        addByLevel:16,

        basicPrice:81920,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw();

          },
          load:function(toLevel){
              for(var i = 0; i < toLevel; i++){
                  this.upgrade();
              }
          },
          redraw:function(){
              document.getElementById("levelJava").innerHTML = this.level;
              document.getElementById("priceJava").innerHTML = format(this.basicPrice);
          }
  }

var python = {
        level:0,
        basicMoney:64, //fix : Filip nastavil basicmoney na 327680 namiesto basicPrice... cize stalo to povodnu cenu
                       // avsak davalo to tych 327680/s

                       //NO NO
                       //FAKE NEWS
        addByLevel:32,

        basicPrice:327680,
        priceByLevel:5,
        upgrade:function(){
            this.level++;
            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            //recalculate
            this.addByLevel=this.basicMoney/basicMoneySplitter;
            this.priceByLevel=this.basicPrice/basicPriceSplitter;
            this.redraw()
        },
        load:function(toLevel){
          for(var i = 0; i < toLevel; i++){
              this.upgrade();
          }
        },
        redraw:function(){
            document.getElementById("levelPython").innerHTML = this.level;
            document.getElementById("pricePython").innerHTML = format(this.basicPrice);
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
            this.priceByLevel=this.basicPrice/3;

            this.basicMoney+=this.addByLevel;
            this.basicPrice+=this.priceByLevel;
            this.redraw();
      },
      load:function(toLevel){
          for(var i = 0; i < toLevel; i++){
              this.upgrade();
          }
      },
      redraw:function(){
          document.getElementById("levelClicker").innerHTML = this.level;
          document.getElementById("priceClicker").innerHTML = format(this.basicPrice);
      }
}

//WHY LIVE
//my thoughts about JS

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
