// Explicit Binding
// call, apply, bind

var sayName = function(lang1,lang2,lang3){
	console.log('My name is: ' + this.name + ' and I know', lang1 + ',' + lang2 + ',' + lang3);
}

var stacey = {
	name: 'Stacey',
	age: 34,
};
var languages = ['javaScript', 'Ruby', 'Python'];

sayName.call(stacey, languages[0], languages[1], languages[2]); // sayName will be invoked in the context of the stacey object
sayName.apply(stacey, languages); // Same as .call but can pass in an array of arguments
var newFunction = sayName.bind(stacey, languages[0], languages[1], languages[2]); // Returns a new function instead of invoking sayName
// It binds this to stacey and pass in the arguments and give us a new function we can call later
console.log('HERE');
newFunction();