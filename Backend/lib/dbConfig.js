const mongoose = require('mongoose');
const userController = require('../controllers/controller.user');
module.exports = {
	connect: () => {
		mongoose.connect('mongodb://127.0.0.1:27017/blog_app').then(async () => {
			console.log('Connected!');
		});
	},
};
