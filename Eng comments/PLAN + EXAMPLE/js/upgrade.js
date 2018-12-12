
class Upgrade{
    var name;
    var price;
    var modifier;
    var priceModifier;
    constructor(name, price, modifier, priceModifier){
        this.name = name;
        this.price = price;
        this.modifier = modifier;
        this.priceModifier = priceModifier
    }

    this.render = function(){
        return "<div class=\"upgrade\"> <p> "+this.name+" level - "+ this.level + "</p> </div>";
    }
    this.calculateBonus = function(){
        var x = 1;
        for(var i  = 0; i < this.level; i++){
            x*=x+modifier;
        }
    }
    this.levelUp(earnedMoney){
        if(earnedMoney < this.calculateCost())
            return false;
        this.level++;
        return true;
    }
    this.calculateCost = function(){
        var x = this.price;
        for(var i = 0; i < this.level; i++){
            x+=x*this.modifier;
        }
    }
}
