const Bid = require('../models/Bid');
const Product = require('../models/Product');
const User = require('../models/User');

exports.placeBid = async (req, res) => {
    const { productId, amount } = req.body;
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    const product = await Product.findById(productId);
    if (!product || product.status !== 'active') return res.status(400).json({ message: 'Invalid product' });

    const bid = await Bid.create({
        product: productId,
        bidder: req.user._id,
        amount
    });

    io.to(`user_${req.user._id}`).emit('bidConfirmation', { message: 'Bid Placed' });
    res.json({ message: 'Bid Placed', bid });
};
 
