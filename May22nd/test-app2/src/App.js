import { Nav } from './Nav';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ContactPage } from './Pages/ContactPage';

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
return (
	<div className='App'>
		<BrowserRouter>
		<Nav />
		<Routes>
			<Route path='/' exact={true} element={<HomePage />} />
			<Route path='/about' exact={true} element={<AboutPage />} />
			<Route path='/contact' exact={true} element={<ContactPage />} />
		</Routes>
    </BrowserRouter>
	</div>
);

}

export default App;
