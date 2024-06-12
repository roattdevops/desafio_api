const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config');
const pedidoRoutes = require('./routes/pedido');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/pedido', pedidoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});