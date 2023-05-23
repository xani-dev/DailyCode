import React, { useRef } from 'react';

export const Contact = () => {
	let refMail = useRef(null);
	let refMessage = useRef(null);

	const handleClick = () => {
		console.log(refMail.current.value);
		console.log(refMessage.current.value);
		refMail.current.value = '';
		refMessage.current.value = '';
	};

	return (
		<div>
			<h1>ContactPage</h1>
			<input ref={refMail} placeholder='Your email'></input>
			<br />
			<textarea ref={refMessage} placeholder='Your Message'></textarea>
			<br />
			<button onClick={() => handleClick()}>Submit</button>
		</div>
	);
};
