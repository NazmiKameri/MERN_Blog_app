const jwt = require('jsonwebtoken');
const { respond } = require('../lib/responder');
const User = require('../models/model.user');
require('dotenv').config();

module.exports = {
	validateUserToken: async (req, res, next) => {
		if (!req.headers.authorization) {
			return respond(res, 'Token not provided', false);
		}

		const token = req.headers.authorization.split(' ')[1];
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.decoded = decoded._id;

			const user = await User.findOne({ _id: decoded._id }).exec();

			next();
		} catch (err) {
			return respond(res, 'Invalid Token', false);
		}
	},
	getDecodedToken(req) {
		const token = req.headers.authorization.split(' ')[1];
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.decoded = decoded._id;
		return decoded._id;
	},
};
