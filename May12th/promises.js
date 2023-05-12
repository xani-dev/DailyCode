const myPromise = () => {
	return new Promise((resolve, reject) => {
		// Perform some sort of async operation.
		setTimeout(
			() => {
				resolve(`I've finally been logged to the console!`);
			},
			2000 // this is 2 seconds (2000 ms)
		);

		reject('It broke!');
	});
};

const myAsyncAwait = async () => {
	try {
		let r = await myPromise();
		console.log(r);
	} catch (err) {
		console.log(err);
	}

	// Example from video about Uber Ride

	const ride = new Promise((resolve, reject) => {
        let arrived = false;
		if (arrived) {
			resolve('driver has arrived 🏎️');
		} else {
			reject('driver bailed 😭 ');
		}
	});

	ride.then((value) => console.log(value)).catch((error) => console.log(error)).finally(()=>console.log('completed!'));
};

myAsyncAwait();
