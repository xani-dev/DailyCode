import React, { useRef } from 'react';

export const Form = () => {
	let fName = useRef(null);
	let lName = useRef(null);

	const handleClick = () => {
		alert('Welcome ' + fName.current.value + ' ' + lName.current.value);

		fName.current.value = '';
		lName.current.value = '';
	};

	return (
		<>
			<input ref={fName} placeholder='Your Name'></input>
			<br />
			<input ref={lName} placeholder='Last name'></input>
			<br />

			<button onClick={() => handleClick()}>Submit</button>
		</>
	);
};
