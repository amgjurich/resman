const path = require('path');

//proxy for dev server

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/',
      },
    },
  },
};
