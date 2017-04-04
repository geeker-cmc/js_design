// var _getElementById=document.getElementById;
// document.getElementById=function(id){
//     alert(1);
//     return _getElementById(id);
// }
// var test=document.getElementById('test');

Function.prototype.before=function(beforeFn){
	var that=this;
	return function(){
	      beforeFn.apply(this,arguments);
	      return that.apply(this,arguments);
	}
}

document.getElementById=document.getElementById.before(function(){
	alert(3);
})
var temp=document.getElementById('test');
console.log(temp);