import React, { useEffect, useState } from 'react';

function index() {
	const [message, setMessage] = useState('Loading');
  const [people, setPeople] = useState([])

	useEffect(() => {
		fetch('http://localhost:8080/api/home')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
        setMessage(data.message)
        setPeople(data.people)
			});
	}, []);
	return (
		<>
			<div>{message}</div>
      {people.map((person, index) =>(
        <div key={index}>{person}</div>
      ))}

		</>
	);
}

export default index;
