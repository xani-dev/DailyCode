const cors = require('cors');
const express = require('express');
const dbconnection = require('./DBConfig').dbconnection;

//This path module is needed to get the string where this server is located
const path = require('path');

const PORT = 8080;
const app = express();
const corsOptions = {
	origin: ['http://localhost:3000'],
	optionsSuccessStatus: 200,
};

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creating  Route to get index.html when running our server,
// using path.join(__dirname) to get the route for it

// let indexHTMLpath = path.join(__dirname, './public/main.html');

// app.get('/', cors(corsOptions), async (req, res) => {
// 	res.sendFile(indexHTMLpath);
// });

app.use(express.static(path.join(__dirname, './public')));


app.listen(PORT, () => {
	console.log(`Express web API running on port: ${PORT}.`);
});
