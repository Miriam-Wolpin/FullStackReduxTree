const mongoose = require('mongoose');

const nodeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    children: { type: Object, require: true }
});

module.exports = mongoose.model('Node', nodeSchema);