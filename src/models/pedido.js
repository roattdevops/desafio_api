const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    productId: Number,
    quantity: Number,
    price: Number,
});

const pedidoSchema = new Schema({
    pedidoId: String,
    valor: Number,
    dataCriacao: Date,
    items: [itemSchema],
});

module.exports = mongoose.model('Pedido', pedidoSchema);