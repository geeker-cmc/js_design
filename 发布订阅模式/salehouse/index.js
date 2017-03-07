var salesOffices={};//定义售楼处
salesOffices.clientList=[];//缓存列表，存放订阅者的回调函数
salesOffices.listen=function(key,fn){
	if(!this.clientList[key]){
		this.clientList[key]=[];
	}
	this.clientList[key].push(fn);
}
salesOffices.trigger=function(){
	var key=Array.prototype.shift.call(arguments),
	fns=this.clientList[key];
	if(!fns||fns.length===0){
		return;
	}
	for(var i=0,fn;fn=fns[i++];){
		fn.apply(this,arguments);
	}
}

salesOffices.listen('squareMeter88',function(price){
	console.log('价格='+price);
})
salesOffices.listen('squareMeter110',function(price){
	console.log('价格='+price);
})
salesOffices.trigger('squareMeter88',200000)
salesOffices.trigger('squareMeter110',400000)