import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		fetch('/members')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				console.log(data);
			});
	}, []);

	return (
		<div className='App'>
			<h1>Hello, this is my Homework!</h1>
			{typeof data.members === 'undefined' ? (
				<p>Loading...</p>
			) : (
				data.members.map((member, i) => <p key={i}>{member}</p>)
			)}
		</div>
	);
}

export default App;
