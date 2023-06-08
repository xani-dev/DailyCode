import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Auth0
import history from './Utils/history';
import {domain, clientId, audience} from './Utils/auth_config.json'
import { Auth0Provider } from '@auth0/auth0-react';

const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
};



const providerConfig = {
	domain: domain,
	clientId: clientId,
	...(audience ? { audience: audience } : null),
	redirectUri: window.location.origin,
	onRedirectCallback,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Auth0Provider {...providerConfig}>
		<App />
	</Auth0Provider>
	// </React.StrictMode>
);
