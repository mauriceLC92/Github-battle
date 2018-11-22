// Implicit Binding
// Find where the function/method was invoked and look to the left of the . (dot) and that is the object
// the method is being called on

// var sayNameMixin = function(obj) {
// 	obj.sayName = function() {
// 		console.log(this.name);
// 	};
// };

// var me ={
// 	name: 'Maurice',
// 	age: 25,
// };

// var you ={
// 	name: 'Tyler',
// 	age: 35,
// };


// sayNameMixin(me);
// sayNameMixin(you);

// me.sayName();
// you.sayName();

var Person = function(name, age) {
	return {
		name: name,
		age: age,
		sayName: function() {
			console.log(this.name);
		},
		mother: {
			name: 'Stacey',
			sayName: function() {
				console.log(this.name);
			}
		}
	}
};

var jim = Person('Jim', 42);
jim.sayName();
jim.mother.sayName();