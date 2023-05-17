import './App.css';
import { Clicker } from './Clicker';
import { Message } from './Message';

function App() {

	const onHandleClick = (direction) => {
		console.log(direction)
	}

	return (
		<div className='App'>
			<Message text='Hello World' />

			<Clicker onClicked={onHandleClick} />
		</div>
	);
}

export default App;
