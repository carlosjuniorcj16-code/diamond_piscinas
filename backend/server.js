const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/produtos', (req, res) => {
  res.json([
    { nome: "Piscina Luxo", preco: 15000 },
    { nome: "Piscina Premium", preco: 25000 },
    { nome: "Piscina Infinity", preco: 40000 }
  ]);
});

app.listen(3001, () => console.log("API rodando em http://localhost:3001"));
