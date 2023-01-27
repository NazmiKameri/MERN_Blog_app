const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
	title: { type: String, required: false },
	image_url: { type: String, required: false },
	descripton: { type: String, required: false },
	user: { type: String, required: true },
});

module.exports = mongoose.model('Blog', blogSchema);
