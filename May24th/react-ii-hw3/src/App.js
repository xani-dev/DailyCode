
import './App.css';
import { Homework } from './Homework';

function App() {
  return (
		<div className='App'>
			<header className='App-header'></header>
			<h1>Homework #2</h1>
			<Homework
				array={[
					'dog 🐶', 'cat 🐱', 'dolphin 🐬', 'cow 🐮', 'sheep 🐑', 'horse 🎠'
				]}
			/>
		</div>
	);
}

export default App;
