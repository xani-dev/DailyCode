const cors = require('cors');
const express = require('express');
const promisePool = require('../PromisePool').pool;
const {
	body,
	check,
	param,
	validationResult,
	Result,
} = require('express-validator');

const PORT = 80;
const app = express();
const corsOptions = {
	origin: ['http://localhost:3000'],
	optionsSuccessStatus: 200,
};

// Middleware...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your endpoints here..

//Ex1 Hello World
app.get('/message', cors(corsOptions), async (req, res) => {
	res.send({ message: 'Hello From XG World' });
});

// Ex2 Cars
app.get('/cars/:id', cors(corsOptions), async (req, res) => {
	const carId = req.params['id'];
	const [result] = await promisePool.query(
		`SELECT * FROM car WHERE car_id = ? `,
		[carId]
	);
	const body = result[0];
	//console.log(result)

	body ? res.send(body) : res.status(404).send({ message: 'Car Not Found.' });
});

// Ex3 Cars for Make
app.get('/cars', cors(corsOptions), async (req, res) => {
	const carMake = req.query['make'];
	const [result] = await promisePool.query(
		`SELECT * FROM car WHERE make = ? `,
		[carMake]
	);
	const body = result[0];
	body
		? res.send(body)
		: res.status(404).send({ message: 'Cars for this Make Not Found.' });
});

// Ex4 Post Car
app.post('/cars', cors(corsOptions), async (req, res) => {
	//Destructuring req.body
	const { make, model, color, price } = req.body;
	//Query to insert car on table
	const insertCar = await promisePool.query(
		`INSERT INTO car (make, model, price, color) VALUES (?,?,?,?)`,
		[make, model, price, color]
	);
	//Getting the Id from the newly inserted item
	const carId = insertCar[0].insertId;

	// Query to return the newly inserted item
	const [carInserted] = await promisePool.query(
		`SELECT * FROM car WHERE car_id = ? `,
		[carId]
	);
	res.send(carInserted);
	carInserted
		? res.send(carInserted)
		: res.status(404).send({ message: 'Could not find car to be inserted.' });
});

// Ex5 Put Car
app.put('/cars', cors(corsOptions), async (req, res) => {
	//These has to match the body of the JSON sent in Postman
	const { carId, model, make, color, price } = req.body;

	const [updateCar] = await promisePool.query(
		// Query and params have to match in exact order
		`UPDATE car SET make = ?, model = ?, color = ?, price = ? WHERE car_id = ?`,
		[make, model, color, price, carId]
	);
	const message = updateCar.info;

	message
		? res.send({ message })
		: res.status(404).send({ message: 'Could not update car.' });
});

//Ex6 Delete Car

app.delete('/cars/:id', cors(corsOptions), async (req, res) => {
	let carId = req.params['id'];
	const [result] = await promisePool.query(
		`DELETE FROM car WHERE car_id = ? `,
		[carId]
	);
	result
		? res.send(result)
		: res.status(404).send({ message: 'Car with this ID Not Found.' });
});

app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}.`);
});
