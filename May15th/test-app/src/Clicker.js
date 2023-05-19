import React from 'react';

export const Clicker = ({ onClicked }) => {
	return (
		<div>
			{/* Children receiving onClicked from parent component */}
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

			<button
			onClick={()=>{
				onClicked('Reset');
			}}
			>Reset</button>
		</div>
	);
};
