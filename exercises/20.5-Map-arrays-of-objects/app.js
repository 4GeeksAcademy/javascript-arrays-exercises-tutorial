let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
  
	let currentlyDate = new Date() - person.birthDate
	let age = Math.floor(currentlyDate/ (1000 * 60 * 60 * 24 * 365.25))
	const greeting = 'Hello, my name is ' + person.name + ' and I am '                         + age + ' years old'
	  
	return greeting;
  };
  
  console.log(people.map(simplifier));

console.log(people.map(simplifier));
