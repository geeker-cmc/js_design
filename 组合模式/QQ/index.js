var closeDoorCommand={
	execure:function(){
		console.log('关门')
	}
}
var openPcCommand={
	execure:function(){
		console.log('开电脑')
	}
}
var openQQCommand={
	execure:function(){
		console.log('登录QQ')
	}
}
var MacroCommand=function(){
	return {
		commandsList:[],
		add:function(command){
			this.commandsList.push(command);
		},
		execure:function(){
			for(var i=0,command;command=this.commandsList[i++];){
				command.execure();
			}
		}
	}
}
var macroCommand=MacroCommand();
macroCommand.add(closeDoorCommand);
macroCommand.add(openPcCommand);
macroCommand.add(openQQCommand);

macroCommand.execure();
