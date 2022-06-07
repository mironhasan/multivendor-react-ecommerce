const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    category: {
        type: String,
        unique: true,
        required: true,
    }
});

module.exports = mongoose.model('Category', categorySchema);