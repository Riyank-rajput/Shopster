import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

//Server starts and will be ready for responsing to the frontend(app.listen)
//Backtick Literal to access the variable inside Literal String

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
