const express = require('express');
const cors = require('cors');
const api = require('./routes/api.js');
const { urlencoded } = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

//Middleware for dependencies
app.use('/api', api);

//this is what's changing everything on my local computer
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(__dirname + '/dist/'));

console.log('dirname', __dirname);

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
