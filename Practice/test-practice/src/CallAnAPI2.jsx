import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';



export const CallAnAPI2 = () => {
	let [userName, setUserName] = useState('')
	let [userEmail, setUserEmail] = useState('');

	const url = `https://jsonplaceholder.typicode.com/users/6`;
	const usersQuery = useQuery(`users/1`, async () => await axios.get(url), {
		refetchOnWindowFocus: false,
		enabled: false,
	});

	useEffect(() => {
		if (usersQuery.isFetched && userName === '') {
			setUserName(usersQuery.data.data.name);
			setUserEmail(usersQuery.data.data.email);
		}
	}, [
		userName,
		setUserName,
		setUserEmail,
		usersQuery.isFetched,
		usersQuery.data?.data.name,
		usersQuery.data?.data.email,
	]);

	const onHandlePush = () => {
		usersQuery.refetch();
		console.log('Hi :)');
	};

	return (
		<>
			<div>
				<button
					onClick={() => {
						onHandlePush();
					}}
				>
					Get user
				</button>
				<span>
					Username: {userName} {userEmail}
				</span>
			</div>
		</>
	);
};
