import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Auth = () => {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<div>
			{!isAuthenticated && (
				<button onClick={() => loginWithRedirect()}>Log in</button>
			)}
			{isAuthenticated && (
				<>
					<button onClick={() => logout()}>Log out</button>
					<br />
					<span>Welcome: {user.name}</span>
				</>
			)}
		</div>
	);
};
