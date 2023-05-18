import './App.css';
import { useState } from 'react';
import { Clicker } from './Clicker';
import { Message } from './Message';

function App() {

	let[counter, setCounter]= useState(0);

	const onHandleClick = (direction) => {
		if (direction === 'Up'){
			setCounter(++counter)
		} else {
			setCounter(--counter)
		}
		console.log(direction)
	}

	return (
		<div className='App'>
			<Message text='Days left: ' />

			<Clicker onClicked={onHandleClick} />

			<h1>Counter: {counter}</h1>
		</div>
	);
}

export default App;
