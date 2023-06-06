import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<div className='navBar'>
			<Link to='/'>Home</Link>
			{'   '}
			<Link to='/apicall'>API Call</Link>
			{'   '}
			<Link to='/storage'>Storage</Link>
			{'  '}
			<Link to='/form'>Form</Link>
			{'  '}
		</div>
	);
};
