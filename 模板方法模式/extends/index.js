//父类
var Beverage=function(){

}
Beverage.prototype.brew=function(){

}
Beverage.prototype.pourInCup=function(){

}
Beverage.prototype.addCondiments=function(){

}
Beverage.prototype.init=function(){
	this.brew();
	this.pourInCup();
	this.addCondiments();
}
var Coffee=function(){

}
Coffee.prototype=new Beverage();
Coffee.prototype.pourInCup=function(){
	console.log('把咖啡倒进杯子');
}
Coffee.prototype.addCondiments=function(){
	console.log('加糖和牛奶')
}
var Coffee=new Coffee();
Coffee.init();