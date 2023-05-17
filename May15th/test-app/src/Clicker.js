import React from 'react';

export const Clicker = ({ onClicked }) => {
	return (
		<div>
			<button
				onClick={() => {
					onClicked('up');
				}}
			>
				Up
			</button>
			<button
				onClick={() => {
					onClicked('down');
				}}
			>
				Down
			</button>
		</div>
	);
};
