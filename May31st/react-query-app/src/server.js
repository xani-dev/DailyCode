const audience = `express-api`; // identifier
const auth0Domain = `thepink-dev.us.auth0.com`; // replace with yours

const fs = require('fs');
const jwt_decode = require('jwt-decode');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const bodyParser = require('body-parser');
const accessLogStream = fs.createWriteStream(
	path.join(__dirname, 'access.log'),
	{ flags: 'a' }
);

const checkJwt = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
	}),
	audience: audience,
	issuer: `https://${auth0Domain}/`,
	algorithms: ['RS256'],
});

const getUserIdFromToken = (req) => {
	const token = req.headers.authorization;
	const decodedToken = jwt_decode(token);
	const userId = decodedToken.sub;
	console.log(userId);
	req.next();
};

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(checkJwt); // <================= This verifies our token.
app.use(bodyParser.json());
app.use(getUserIdFromToken);
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
	res.send({ message: 'Hello World!!!' });
});

app.listen(5150, () => {
	console.log('listening on port 5150');
});
