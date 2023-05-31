import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './App.css';
import { RedStripe } from './RedStripe';
import { BlueStripe } from './BlueStripe';
import { GreenStripe } from './GreenStripe';

const myQueryClient = new QueryClient();

function App() {
	return (
		<div className='App'>
			<QueryClientProvider client={myQueryClient}>
				<RecoilRoot>
					<RedStripe />
					<BlueStripe />
          <GreenStripe />
				</RecoilRoot>
			</QueryClientProvider>
		</div>
	);
}

export default App;
