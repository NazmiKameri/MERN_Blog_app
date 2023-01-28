const { check, validationResult } = require('express-validator');

const User = require('../models/model.user');

module.exports = {
	validate: {
		register: [
			check('email', 'Email is not valid').isEmail(),
			check('email', 'Email must not be empty').notEmpty(),
			check('email').custom(async (value) => {
				const user = await User.findOne({ email: value }).exec();
				if (user) {
					return Promise.reject('Email already in use');
				}
			}),
			check('password', 'Passwod must not be empty').notEmpty(),
			check('password', 'Password must have at least 6 letters').isLength({ min: 6 }),
		],
		login: [
			check('email', 'Email is not valid').isEmail(),
			check('email', 'Email must not be empty').notEmpty(),
			check('password', 'Passwod must not be empty').notEmpty(),
			check('password', 'Password must have at least 6 letters').isLength({ min: 6 }),
		],
		addBlog: [
			check('title', 'Title must not be empty').notEmpty(),
			check('descripton', 'Descripton must not be empty').notEmpty(),
		],
		resetPassword: [
			check('token', 'token field must not be empty').notEmpty(),
			check('token', 'token field must be a jwt token').isJWT(),
			check('password', 'password must have minimum 6 characters').isLength({ min: 6 }),
			check('password', 'password must not be empty').notEmpty(),
		],
	},

	validateResult: (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} else {
			next();
		}
	},
};
