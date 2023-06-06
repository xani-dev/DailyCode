//  References to our CORS and express dependencies
const cors = require('cors');
const express = require('express');

// Configuring the port in which our express API will run on
// 80 unencrypted, 443 encrypted
const PORT = 80;

// Creates our one and only Express application
const app = express();

// Configures the CORS options
const corsOptions = {
	origin: ['http://localhost:3000'],
	optionsSuccessStatus: 200,
};

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define the route for our API
app.get('/message', cors(corsOptions), async (req, res) => {
	res.send({ message: 'Hello World' });
});

app.get('/car', cors(corsOptions), async (req, res) => {
	res.send({
		model: 'G-class SUV',
		make: 'Mercedes',
		color: 'White',
		price: '$200,000',
	});
});

app.get('/person', cors(corsOptions), async (req, res) => {
	res.send({
		name: 'Will',
		lastname: 'Smith',
	});
});

app.get('/house', cors(corsOptions), async (req, res) => {
	res.send({
		address: 'Midtown, Manhattan',
        price: '$4,000,000',
        sqft: 1000
	});
});

// starts the API
app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}`);
});
