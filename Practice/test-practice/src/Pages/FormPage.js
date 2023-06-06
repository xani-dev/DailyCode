import React, { useRef } from 'react';

export const FormPage = () => {
	let refMail = useRef(null);
	let refMessage = useRef(null);

	const handleClick = () => {
		sessionStorage.setItem(refMail.current.value);
		console.log(refMessage.current.value);
		refMail.current.value = '';
		refMessage.current.value = '';
	};

	return (
		<div>
			<h1>Form Page</h1>
			<input ref={refMail} placeholder='Your email'></input>
			<br />
			<textarea ref={refMessage} placeholder='Your Message'></textarea>
			<br />
			<button onClick={() => handleClick()}>Submit</button>
		</div>
	);
};
