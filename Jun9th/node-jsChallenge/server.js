const cors = require('cors');
const express = require('express');
const dbconnection = require('./DBConfig').dbconnection;

const PORT = 80;
const app = express();
const corsOptions = {
	origin: ['http://localhost:3000'],
	optionsSuccessStatus: 200,
};

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Handlers
// app.get()
app.get('/users/:id', cors(corsOptions), async (req, res) => {
	const userId = req.params['id'];
	const [response] = await dbconnection.query(
		` SELECT * FROM users WHERE id = ? `,
		[userId]
	);
	const body = response[0];
	body ? res.send(body) : res.status(404).send({ message: 'User Not Found' });
});

app.get('/users', cors(corsOptions), async (req, res) => {
	const {name, age} = req.query;
	const [response] = await dbconnection.query(
		` SELECT * FROM users WHERE name = ? AND age = ? `,
		[name, age]
	);
    console.log(response)
	const body = response[0];
	body ? res.send(body) : res.status(404).send({ message: 'User Not Found' });
});

// app.post()
app.post('/users', cors(corsOptions), async (req, res) => {
	const { name, age, followers, verified, country } = req.body;

	const insertUser = await dbconnection.query(
		`INSERT INTO users (name, age, followers, verified, country) VALUES (?,?,?,?,?)`,
		[name, age, followers, verified, country]
	);

	const userId = insertUser[0].insertId;

	const [userInserted] = await dbconnection.query(
		`SELECT * FROM users WHERE id = ?`,
		[userId]
	);

	userInserted
		? res.send(userInserted)
		: res.status(404).send({ message: 'Could not insert user into table' });
});

// app.put()
app.put('/users/:id', cors(corsOptions), async (req, res) => {
      let id = req.params['id'];
	const { name, age, followers, verified, country } = req.body;

	const [updateUser] = await dbconnection.query(
		`UPDATE users SET name=?, age=?, followers=?, verified=?, country=? WHERE id=? `,
		[name, age, followers, verified, country, id]
	);
	const message = updateUser.info;
   
	message
		? res.send({ message })
		: res.status(404).send({ message: 'Could not update User' });
});

// app.delete()
app.delete('/users/:id', cors(corsOptions), async (req, res) => {
    const userId = req.params['id'];
		const [response] = await dbconnection.query(
			` DELETE FROM users WHERE id = ? `,
			[userId]
		);
        
		const body = response;
		body ? res.send(body) : res.status(404).send({ message: 'User Not Found' });
})


app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}.`);
});
