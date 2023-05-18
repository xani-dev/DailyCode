import React from 'react';

export const Clicker = ({ onClicked }) => {
	return (
		<div>
			<button
				onClick={() => {
					onClicked('Up');
				}}
			>
				Count Up
			</button>
			<button
				onClick={() => {
					onClicked('Down');
				}}
			>
				Count Down
			</button>
		</div>
	);
};
