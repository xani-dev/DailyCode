import './App.css';
import { useState } from 'react';
import { Clicker } from './Clicker';
import { Message } from './Message';

function App() {
	let [counter, setCounter] = useState(0);
	let [history, setHistory] = useState([]);

	const onHandleClick = (direction) => {
		history.push(direction);
		setHistory([...history]);

		console.log(history)

		if (direction === 'Up') {
			setCounter(++counter);
		} else if (direction === 'Down') {
			setCounter(--counter);
		} else {
			setCounter((counter = 0));
			setHistory([])
		}
		console.log(direction);
	};

	return (
		<div className='App'>
			<Message text='📅 Days left: ' />

			{/* Passing onClicked to children buttons on the Clicker.js */}
			<Clicker onClicked={onHandleClick} />

			<h1>Counter: {counter}</h1>
			<br />
			<h3>History: {history}</h3>
		</div>
	);
}

export default App;
