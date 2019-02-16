const app = require('express')();

app.get('/', (request, response) => {
  response.send('Timestamp Microservice works!');
});

app.listen('8000', () => {
  console.log('listening on port 8000');
});
