const main = () => {
	let p1 = {
		name: 'Joe',
		age: 11,
	};
	let p2 = {
		name: 'Joe',
		age: 11,
	};
	let p3 = p2;

// Line to demonstrate p1 and p2 aren't equal
	if (p1 == p2) {
		console.log('here');
	}
	if (p2 === p3) {
		console.log('Identity');
	}
	if (JSON.stringify(p1) === JSON.stringify(p2)) {
		console.log('Equality');
	}
};

main();
