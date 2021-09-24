const express = require('express');
const app = express();

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

const middleware = (req, res, next) => {
  console.log('Middleware.');
 
  next();
};

const postMiddleware = (req, res, next) => {
  next();
};

app.get('/api', middleware, (req, res) => {
  res.json({
    a: 20,
  });
});

app.post('/api', postMiddleware, (req, res) => {
  console.log(req.body);
  
  res.send({
    a: 30,
  });
});

app.listen(500, (err) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Hello');
  }
});