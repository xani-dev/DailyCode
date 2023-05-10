let evenOdd = () => {
	for (let i = 1; i <= 10; i++) {
		const element = i;
		element % 2 == 0
			? console.log('Even:' + element)
			: console.log('Odd:' + element);
	}
};

evenOdd();
