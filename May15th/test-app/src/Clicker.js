import React from 'react';

export const Clicker = ({ message }) => {
	const handleClick = () => {
		console.log(message);
	};

	return (
		<div>
			<button
				onClick={() => {
					handleClick(message='up');
				}}
			>
				Up
			</button>
			<button
				onClick={() => {
					handleClick(message='down');
				}}
			>
				Down
			</button>
		</div>
	);
};
