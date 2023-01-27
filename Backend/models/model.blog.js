const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		image_url: { type: String, required: false },
		descripton: { type: String, required: true },
		user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Blog', blogSchema);
