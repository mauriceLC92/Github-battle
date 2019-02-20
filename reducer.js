var votes = [
	'tacos',
	'pizza',
	'pizza',
	'tacos',
	'fries',
	'ice cream',
	'ice cream',
	'pizza'
  ]

  const finalTally = votes.reduce((tally, vote) => {
	if(!tally[vote]){
		tally[vote] = 1;
	}
	else {
		tally[vote] = tally[vote] + 1;
	}
	return tally;
  }, {})

console.log(finalTally);

const testObj = {};
console.log('testObj before', testObj);

if (!testObj['Me']){
	testObj['Me'] = 'hello';
}

console.log('testObj after',testObj);


var cars = [
    {
        'make': 'audi',
        'model': 'r8',
        'year': '2012'
    }, {
        'make': 'audi',
        'model': 'rs5',
        'year': '2013'
    }, {
        'make': 'ford',
        'model': 'mustang',
        'year': '2012'
    }, {
        'make': 'ford',
        'model': 'fusion',
        'year': '2015'
    }, {
        'make': 'kia',
        'model': 'optima',
        'year': '2012'
    },
];

const finalMakes = cars.reduce((makes, car) => {
	if (!makes[car.make]) {
		makes[car.make] = [car];
	}
	else {
		makes[car.make].push(car);
	}
	return makes;
}, {})

console.log(finalMakes);