const express = require('express');
const cors = require('cors');
const api = require('./server/routes/api.js');
const { urlencoded } = require('express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

//Middleware for dependencies
app.use('/api', api);

//this is what's changing everything on my local computer
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/dist/'));

  console.log('dirname', __dirname);

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
