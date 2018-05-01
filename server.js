const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

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

//below is info to run the server
app.get('/api/*', (req, res) => {
  res.json({ok: true});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};
