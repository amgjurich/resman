const express = require('express');
const cors = require('cors');
const api = require('./routes/api.js');
const { urlencoded } = require('express');

const app = express();

//Middleware for dependencies
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api', api);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
