const express = require('express');
const app = express();
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');
const config = require('./config');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
mongoose.connect(config.DATABASE_URL);
//line 14 uses express cors middleware to make the client origin configurable.
app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);
//this sets up passport and jwt in case we need password and user info with api
const {
	localStrategy,
	jwtStrategy
} = require('./strategy');
passport.use(localStrategy);
passport.use(jwtStrategy);

//endpoints!!!
//when i have the api key, line 30 will show a json object with program info
app.get('/api/programs', (req,res) => {
  res.json({programs: yes});
})
app.get('/api/*', (req, res) => {
  res.json({ok: true});
});
//below is info to run the server
function runServer() {
	const port = process.env.PORT || 8080;
	return new Promise((resolve, reject) => {
		server = app.listen(port, () => {
			console.log(`Your app is listening on port ${8080}`);
			resolve(server);
		}).on('error', err => {
			reject(err);
		});
	});
}

function closeServer() {
	return new Promise((resolve, reject) => {
		console.log('Closing server');
		server.close(err => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});
	});
}
if (require.main === module) {
	runServer().catch(err => console.error(err));
}
module.exports = {
	runServer,
	app,
	closeServer
};
