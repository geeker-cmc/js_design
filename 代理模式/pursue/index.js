var Flower=function(){};
var xiaoming={
	sendFlower:function(target){
		var flower=new Flower();
		target.receiveFlower(flower);
	}
}
var B={
	receiveFlower:function(flower){
		A.ListenGoodMood(function(){
			A.receiveFlower(flower);
		})
	}
}
var A={
	receiveFlower:function(flower){
		console.log('收到花'+flower);
	},
	ListenGoodMood:function(fn){
		setTimeout(function(){
			fn();
		},1000)
	}
}
xiaoming.sendFlower(B);