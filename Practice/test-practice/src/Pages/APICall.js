import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const APICall = () => {
	let [employees, setEmployees] = useState([]);

	useEffect(() => {
		const getEmployeeData = async () => {
			const users = (
				await axios.get(`https://jsonplaceholder.typicode.com/users`)
			).data;
			console.log(typeof users);
			setEmployees(users);
		};
		getEmployeeData();
		console.log(employees);
	}, []); //=> Empty dependency array

	return (
		<>
			<h1>Employees</h1>
			<br />
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Mail</th>
					</tr>
					{employees.map((employee) => {
						return (
							<tr>
								<td>{employee?.name}</td>
								<br></br>
								<td>{employee?.email}</td>
							</tr>
						);
					})}
					<tr></tr>
				</tbody>
			</table>
		</>
	);
};
