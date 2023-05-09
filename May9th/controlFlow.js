const ifExample = () => {
	let a = 2;

	if (a == 1) {
		console.log('It is a one');
	}

	if (a == 1) {
		console.log('here is one');
	} else {
		console.log('not a one');
	}

	if (a == 2) {
		console.log('here is two');
	} else if (a == 3) {
		console.log('here is a three');
	} else {
		console.log('here is a different number');
	}
};
ifExample();

const switchExample = () => {
    let firstName = 'Xani'

    switch (firstName) {
        case'Joe':
        console.log('Hello Joe')
        break;

        case 'Fred':
        console.log('Hello Fred')
        break
        default:
        console.log('Hello Stranger!')
        
    }
}

switchExample();