require('dotenv').config();
const User = require('../models/model.user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { sendVerificationEmail } = require('../lib/emails');

module.exports = {
	getAllUsers: async (req, res) => {
		const user = await User.find();
		return user;
	},
	register: async (body) => {
		const { email, password, firstName, lastName } = body;

		const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALT));
		const user = await User.create({
			email: email,
			password: hashedPassword,
			firstName: firstName,
			lastName: lastName,
			blogs: [],
		});
		sendVerificationEmail(user);
		delete user._doc.password;

		return user;
	},
	login: async (body) => {
		const { email, password } = body;

		const user = await User.findOne({ email }).exec();
		if (!user) {
			throw Error('This user does not exist');
		}
		if (!bcrypt.compareSync(password, user.password)) {
			throw Error('The passwords do not match');
		}

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

		return token;
	},
	verifyAccount: async (token) => {
		if (!token) {
			throw Error('There is no token provided');
		}
		const decodedToken = jwt.verify(token, process.env.JWT_VERIFICATION_SECRET);
		const user = await User.findOne({ _id: decodedToken }).exec();
		if (!user) {
			throw Error('User does not exist');
		}
		await User.findByIdAndUpdate(user._id, { verified: true }).exec();
		return true;
	},
};
