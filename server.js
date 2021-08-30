const express = require('express');
const cors = require('cors');
const api = require('./server/routes/api.js');
const { urlencoded } = require('express');

//parsers
const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

//route for api calls
app.use('/api', api);

//production environment setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'));

  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
