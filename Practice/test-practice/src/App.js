import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
import { CallAnAPI } from './CallAnAPI';
import { CallAnAPI2 } from './CallAnAPI2';


// To use Navigation
import { Nav } from './Nav';
import { APICall } from './Pages/APICall';
import { FormPage } from './Pages/FormPage';
import { LocalStorageExample } from './Pages/LocalStorageExample';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient({});

function App() {
  return (
		<div className='App'>
			<h1>Test Practice</h1>
			<main>
				<p>Navigation</p>
				<BrowserRouter>
					<Nav />
					<Routes>
						<Route path='/storage' element={<LocalStorageExample />} />
						<Route path='/apicall' element={<APICall />} />
						<Route path='/form' element={<FormPage />} />
					</Routes>
				</BrowserRouter>

				<p>Call an API with ReactQuery</p>
				<QueryClientProvider client={queryClient}>
					<CallAnAPI2 />
					<CallAnAPI />
					{/* <ReactQueryDevtools /> */}
				</QueryClientProvider>
			</main>
		</div>
	);
}

export default App;
