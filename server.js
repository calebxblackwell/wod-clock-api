const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
mongoose.connect(config.DATABASE_URL);

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);
//below is info to run the server
app.get('/api/*', (req, res) => {
  res.json({ok: true});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};
