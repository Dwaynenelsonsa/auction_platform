const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socket = require('socket.io');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const bidRoutes = require('./routes/bidRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auction-db');

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/bids', bidRoutes);

app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.use(errorHandler);

const io = new socket.Server(app);

// Real-time event handlers
io.on('connection', (socket) => {
    socket.on('bid', (data) => {
        socket.emit('bidConfirmation', { success: true, message: 'Bid Placed!' });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

