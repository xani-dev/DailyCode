import './App.css';
import { People } from './People';

function App() {
	const userList = [
		{ id: 1, firstName: 'Alice', lastName: 'Smith' },
		{ id: 2, firstName: 'Bob', lastName: 'Johnson' },
		{ id: 3, firstName: 'Charlie', lastName: 'Miller' },
		{ id: 4, firstName: 'Dave', lastName: 'Taylor' },
	];

	return (
		<>
			<div className='App'>
				<h1>Hello, People</h1>
				<People data={userList} />
			</div>
		</>
	);
}

export default App;
