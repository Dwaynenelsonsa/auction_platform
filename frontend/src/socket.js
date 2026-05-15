const io = require('socket.io');

module.exports = (app) => {
    io.on('connection', (socket) => {
        socket.on('bid', (data) => {
            socket.emit('bidConfirmation', { success: true });
        });
    });
};
