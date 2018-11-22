// new Binding
// window binding

// new Binding
// var Animal = function(color, name, type){
// 	// this = {} javascript behind the scenes creates this object for us when using the new keyword
// 	this.color = color;
// 	this.name = name;
// 	this.type = type;
// };

// var zebra =  new Animal('black and white',' Maurice', 'zebra');

// window Binding
var sayAge = function() {
	console.log(this.age);
};

var me = {
	age: 25
};

sayAge();
window.age = 45;
sayAge();