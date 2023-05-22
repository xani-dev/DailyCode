import React from 'react';
import { useState } from 'react';
import { People } from './People';


export const PeopleContent = () => {
	const [show, setShow] = useState(true);

	const userList = [
		{ id: 1, firstName: 'Alice', lastName: 'Smith' },
		{ id: 2, firstName: 'Bob', lastName: 'Johnson' },
		{ id: 3, firstName: 'Charlie', lastName: 'Miller' },
		{ id: 4, firstName: 'Dave', lastName: 'Taylor' },
	];

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<>
			<div className='App'>
				<h1>Hello, People</h1>
				<button onClick={() => handleClick()}>
					{show ? 'Hide Table' : 'Show Table'}
				</button>
				{show && <People data={userList} />}
			</div>
		</>
	);
};
