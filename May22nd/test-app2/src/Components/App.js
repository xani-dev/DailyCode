import { Nav } from './Nav';
import { HomePage } from '../Pages/HomePage';
import { AboutPage } from '../Pages/AboutPage';
import { ContactPage } from '../Pages/ContactPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Styles/App.css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
