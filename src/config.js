const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pedidos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

module.exports = mongoose;