var plane={
	fire:function(){
		console.log('发射普通子弹');
	}
}
var missileDecorator=function(){
	console.log('发射导弹');
}
var fire1=function(){
	fire2();
	atomDecorator();
}
plane.fire();