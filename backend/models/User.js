 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['buyer', 'seller'], default: 'buyer' }
}))
