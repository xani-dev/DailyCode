// Create a dictionary of people objects whose key is a social security number.  Add at least 10 people to this dictionary.  What happens if you try to return a person from the dictionary whose key does not exist?

const ssnDictionary = () => {
	let persons = {
		11111111: { fName: 'Carisma' },
		22222222: { fName: 'Xani' },
		33333333: { fName: 'Reid' },
		44444444: { fName: 'Valerie' },
		55555555: { fName: 'Karina' },
		66666666: { fName: 'Samira' },
		7777777: { fName: 'Nicole' },
		88888888: { fName: 'Rosie' },
		99999999: { fName: 'Iman' },
		00000000: { fName: 'Leo' },
	};

	console.log(persons[11111111]);
};

ssnDictionary();
