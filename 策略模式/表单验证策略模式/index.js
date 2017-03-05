var registerForm=document.querySelector("#registerForm");
registerForm.onsubmit=function(){
	var errorMsg=vaildataFunc();
	if(errorMsg){
		alert(errorMsg);
		return false;
	}
}
var vaildataFunc=function(){
	var validator=new Validator();
	validator.add(registerForm.userName,'isNonEmpty','用户名不能为空');
	validator.add(registerForm.password,'minLength:6','密码长度不能小于6');
	validator.add(registerForm.userName,'isMobile','手机号输入错误');
	var errorMsg=validator.start();
	return errorMsg;
}
//验证的对象，提供完整的验证规则
var strategies={
	//验证是否为空
	isNonEmpty:function(value,errorMsg){
		if(value==''){
			return errorMsg;
		}
	},
	//验证数字的长度
	minLength:function(value,length,errorMsg){
		if(value.length<length){
			return errorMsg;
		}
	},
	//验证是否为手机号码
	isMobile:function(value,errorMsg){
		if(!/(^1[3|5|8]\d{9}$)/.test(value)){
			return errorMsg;
		}
	}
}
var Validator=function(){
	this.cache=[];
}
Validator.prototype.add=function(dom,rule,errorMsg){
	var ary=rule.split(':');
	this.cache.push(function(){
		var strategy=ary.shift();
		ary.unshift(dom.value);
		ary.push(errorMsg);
		return strategies[strategy].apply(dom,ary);
	})
}
Validator.prototype.start=function(){
	for(var i=0,len=this.cache.length;i<len;i++){
		var mes=this.cache[i]();
		if(mes){
			return mes;
		}
	}
}

