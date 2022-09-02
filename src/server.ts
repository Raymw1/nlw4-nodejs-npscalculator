import express from 'express';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'Hello, World!' })
);

app.post('/', (request, response) => {
  return response.json({ message: 'Data received!' });
});

app.listen(3333, () => console.log('Go to http://localhost:3333'));
