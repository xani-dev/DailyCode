import React from 'react';

// {data} is coming from App.js and it has to be called exactly like that.
export const People = ({ data }) => {
	return (
		<>
			<div className='People'>
				{/* {data.map((user) => {
					// we add key to avoid React error each child should have a unique key
					return <div key={user.id}>
                        {user.firstName}
                        </div>;
				})} */}

				{/* Now, let's render a table instead:  */}

				<table>
					<thead>This is the People's table</thead>
					<tbody>
                        <tr>
                            <th>First</th>
                            <th>Last</th>
                        </tr>
						{data.map((user) => (
							<tr key={user.id}>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<br />
			<div>...bye, People</div>
		</>
	);
};
