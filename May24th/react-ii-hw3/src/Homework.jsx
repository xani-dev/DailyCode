import React from 'react';

export const Homework = (props) => {
	const listAnimals = props.array.map((animal) => <li>{animal}</li>);

	return (
		<>
			<ul>{listAnimals}</ul>
		</>
	);
};
