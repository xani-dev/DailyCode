import React from 'react';
import './Square.css';

export const Square = (props) => {
	return (
		<>
			<div className='square'>
				<div className='content'>
					<p>{props.text}</p>
				</div>
			</div>
		</>
	);
};
