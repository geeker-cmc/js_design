var strategies={
	isNonEmpty:function(value,errorMsg){
		if(value===''){
			return errorMsg;
		}
	},
	minlength:function(value,length,errorMsg){
		if(value.length<length){
			return errorMsg;
		}
	},
	isMobile:function(value,errorMsg){
		if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
			return errorMsg;
		}
	}

}
var validataFunc=function(){
	var validator=new Validator();
	/*添加校验规则*/
	validator.add(registerForm.userName,'isNonEmpty','用户名不能为空');
	validator.add(registerForm.password,'minlength','密码长度不能少于6位');
	validator.add(registerForm.phoneNumber,'isMobile','手机号码格式不对');

	var errorMsg=validator.start();//获得校验结果
	return errorMsg;
}
var registerForm=document.querySelector('#registerForm');
registerForm.onsubmit=function(){
	var errorMsg=validataFunc();
	if(errorMsg){
		alert(errorMsg);
		return false;
	}
}
//Validator类的实现
var Validator=function(){
	this.cache=[];//保存校验规则
}
Validator.prototype.add=function(dom,rule,errorMsg){
	var ary=rule.split(':');
	this.cache.push(function(){
		var strategy=ary.shift();//用户挑选的strategy
		ary.unshift(dom.value);
		ary.push(errorMsg);
		return strategies[strategy].apply(dom,ary);
	})
}
Validator.prototype.start=function(){
	for(var i=0,validataFunc;validataFunc=this.cache[i++];){
		var msg=validataFunc();
		if(msg){
			return msg;
		}
	}
}