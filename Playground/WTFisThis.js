// The this keyword allows you to reuse functions with different contexts. Said differently, 
// the “this” keyword allows you to decide which object should be focal when invoking a function or a method. 

// Important question to ask yourself when wondering what the 'this' keyword is referencing is:
// ”Where is this function being invoked?”. 
// The only way you can tell what the this keyword is referencing is by looking at where the function 
// using the this keyword was invoked.

// Implicit Binding -  Look tothe left of the dot
// console.log('Implicit Binding');
// const user = {
// 	name: 'Tyler',
// 	age: 27,
// 	greet() {
// 		console.log(`Hello, my name is ${this.name}`);
// 	},
// 	mother: {
// 		name: 'Stacey',
// 		greet() {
// 			console.log(`Hello, my name is ${this.name}`);
// 		}
// 	}
// }

// user.greet();
// user.mother.greet();

// Explicit Binding
// console.log('Explicit Binding')
// function greet() {
// 	console.log(`Hello, my name is ${this.name}`);
// }

// const user1 = {
// 	name: 'Tyler',
// 	age: 27,
// }

// “call” is a method on every function that allows you to invoke the function 
// specifying in what context the function will be invoked.

// greet.call(user1);

console.log('-------------------------');

// function greet(l1, l2, l3) {
// 	console.log(
// 		`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
// 	)
// }

// const user2 = {
// 	name: 'Tyler',
// 	age: 27,
// }

// const languages = ['JavaScript', 'Ruby', 'Python']

// greet.call(user2, languages[0], languages[1], languages[2])

// Well good news for us, this is exactly what .apply does. .apply is the exact same thing as .call, 
// but instead of passing in arguments one by one, you can pass in a single array and it will 
// spread each element in the array out for you as arguments to the function.

// const languages1 = ['JavaScript', 'Ruby', 'Python']

// greet.apply(user2, languages1)

console.log('-------------------------');

// The last part of this rule is .bind. .bind is the exact same as .call but instead of immediately invoking the function, 
// it’ll return a new function that you can invoke at a later time. So if we look at our code from earlier, using .bind, 
// it’ll look like this

// function greet (l1, l2, l3) {
// 	console.log(
// 	  `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
// 	)
//   }
  
//   const user = {
// 	name: 'Tyler',
// 	age: 27,
//   }
  
//   const languages = ['JavaScript', 'Ruby', 'Python']
  
//   const newFn = greet.bind(user, languages[0], languages[1], languages[2])
//   newFn() 

console.log('-------------------------');

// new Binding
// The third rule for figuring out what the this keyword is referencing is called the new binding. 
// If you’re unfamiliar with the new keyword in JavaScript, whenever you invoke a function with the new keyword, 
// under the hood, the JavaScript interpretor will create a brand new object for you and call it this. 
// So, naturally, if a function was called with new, the this keyword is referencing that new object that the interpretor created.

function User (name, age) {
	/*
	  Under the hood, JavaScript creates a new object called `this`
	  which delegates to the User's prototype on failed lookups. If a
	  function is called with the new keyword, then it's this new object
	  that interpretor created that the this keyword is referencing.
	*/
  
	this.name = name
	this.age = age
  }

  const me = new User('Tyler', 27)