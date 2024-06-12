const express = require('express');
const router = express.Router();
const Pedido = require('../models/pedido');

router.post('/', async (req, res) => {
    try {
        const newPedido = new Pedido({
            pedidoId: req.body.numeroPedido,
            valor: req.body.valorTotal,
            dataCriacao: req.body.dataCriacao,
            items: req.body.items,
        });
        const savedPedido = await newPedido.save();
        res.status(201).json(savedPedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



router.get('/:pedidoId', async (req, res) => {
    try {
        const pedido = await Pedido.findOne({ pedidoId: req.params.pedidoId });
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.json(pedido);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.get('/list', async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put('/:pedidoId', async (req, res) => {
    try {
        const updatedPedido = await Pedido.findOneAndUpdate(
            { pedidoId: req.params.pedidoId },
            req.body,
            { new: true }
        );
        if (!updatedPedido) {
            return res.status(404).json({ message: 'Pedido não encontrado para atualização' });
        }
        res.json(updatedPedido);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:pedidoId', async (req, res) => {
    try {
        const deletedPedido = await Pedido.findOneAndDelete({ pedidoId: req.params.pedidoId });
        if (!deletedPedido) {
            return res.status(404).json({ message: 'Pedido não encontrado para exclusão' });
        }
        res.json(deletedPedido);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;