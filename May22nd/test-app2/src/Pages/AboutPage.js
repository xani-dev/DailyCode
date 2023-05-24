import React, { useEffect, useState } from 'react';


export const AboutPage = () => {
	let [text, setText] = useState('');

	useEffect(()=>{
		console.log('I have been loaded into the DOM')
	}, [])  //=> Empty dependency array

	useEffect(()=>{
		if(text){
			console.log('Text has changed')
		}
	}, [text]) //Monitors changes in text

	const handleClick = ()=> {
		setText('changed')
	}

	return (
		<div>
			<h1>AboutPage</h1>
			<br />

			<button onClick={()=>{handleClick()}}>Click</button>
		</div>
	);
};
