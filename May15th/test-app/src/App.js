import './App.css';
import { Clicker } from './Clicker';
import { Message } from './Message';

function App() {
	return (
		<div className='App'>
			<Message text='Hello World' />

			<Clicker />
		</div>
	);
}

export default App;
