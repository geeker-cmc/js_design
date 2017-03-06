/*计算乘积*/
var mult=function(){
	var a=1;
	for(var i=0,l=arguments.length;i<l;i++){
		a*=arguments[i];
	}
	return a;
}
/*计算加和*/
var plus=function(){
	var a=0;
	for(var i=0,l=arguments.length;i<l;i++){
		a+=arguments[i];
	}
	return a;
}
/*创建缓存代理工厂*/
var createProxyFactory=function(fn){
	var cache={};
	return function(){
		var temp=Array.prototype.join.call(arguments,',');
		for(var key in cache){
			if(key==temp){
				return cache[key];
			}
			
		}
		return cache[temp]=fn.apply(null,arguments)
	}
}

var proxyMult=createProxyFactory(mult);
var proxyPlus=createProxyFactory(plus);

alert(proxyMult(1,2,3,4));
alert(proxyMult(1,2,3,4));
alert(proxyPlus(1,2,3,4));
alert(proxyPlus(1,2,3,4));
