const User = require('../models/model.user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
	register: async (body) => {
		const { email, password, firstName, lastName } = body;

		const user = await User.create({
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		});
		return user;
	},
	login: async (body) => {},
};
