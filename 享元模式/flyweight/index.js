var Model=function(sex,underwear){
	this.sex=sex;
	this.underwear=underwear;
}
Model.prototype.takePhoto=function(){
	console.log('sex='+this.sex+'underwear='+this.underwear);
}
var maleModel=new Model('male'),
    femaleModel=new Model('female');

for(var j=1;j<=50;j++){
	maleModel.underwear='underwear'+j;
	femaleModel.takePhoto();
}
for(var j=1;j<=50;j++){
	femaleModel.underwear='underwear'+j;
	femaleModel.takePhoto();
}