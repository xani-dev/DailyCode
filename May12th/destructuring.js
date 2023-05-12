const destructuring = () => {
	// Our object
	let person = {
		fName: 'Peter',
		lName: 'Parker',
	};

	// Destructuring
	let { fName } = person;
	console.log(fName);

	// Another Example
	const { PI, LN10, SQRT2 } = Math;
	console.log(Math);

	// And yet another -and clearer example!
	const [one, two] = [1, 2, 3];
	console.log(one, two);

	// Another Example, with Emojis!
	const funArr = ['🥓', '🍟', '🍕'];
	const [bacon, ...rest] = funArr;
	console.log(rest);
};

destructuring();
