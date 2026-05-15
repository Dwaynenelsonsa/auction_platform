 const Product = require('../models/Product');

exports.getAll = async (req, res) => {
    try {
        const { page = 1, limit = 10, title, minPrice, maxPrice } = req.query;
        const { search, minPrice, maxPrice } = req.query;
        const query = {};
        if (search) query.title = new RegExp(search, 'i');
        if (minPrice || maxPrice) query.price = {};
        if (minPrice) query.price.$gte = parseFloat(minPrice);
        if (maxPrice) query.price.$lte = parseFloat(maxPrice);

        const products = await Product.find(query).sort({ endTime: 1 });
        res.json(products);
    } catch (error) { res.status(500).json({ message: 'Error fetching products' }); }
};

