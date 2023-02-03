require('dotenv').config();
const User = require('../models/model.user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { sendVerificationEmail, sendPasswordResetEmail } = require('../lib/emails');

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
		if (!user.verified) {
			throw Error('This user is not verified please check ur email for verefication');
		}

		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

		return token;
	},
	getMe: async (token) => {
		const splitToken = token.split(' ')[1];

		const decodedToken = jwt.verify(splitToken, process.env.JWT_SECRET);
		const decodedId = decodedToken._id;
		const user = await User.findById({ _id: decodedId }).exec();
		// console.log(user);
		return user;
	},
	getUserById: async (params) => {
		const { id } = params;
		const user = await User.findById({ _id: id }).exec();
		return user;
	},
	editUser: async (req) => {
		const id = req.decoded;
		const { firstName, lastName } = req.body;

		const user = await User.findByIdAndUpdate(id, {
			firstName,
			lastName,
		}).exec();
		return 'User has been edited Succefully';
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
	requestPasswordReset: async (body) => {
		const { email } = body;

		const user = await User.findOne({ email }).exec();
		if (!user) {
			throw Error('This email doesnt belong to any user');
		}
		sendPasswordResetEmail(user);
		return true;
	},
	passwordReset: async (body) => {
		const { token, password } = body;

		const decoded = jwt.verify(token, process.env.JWT_VERIFICATION_SECRET);
		console.log(decoded);
		const user = await User.findById({ _id: decoded._id }).exec();
		if (!user) {
			throw Error('User doesnt exist');
		}
		const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALT));
		await User.findByIdAndUpdate(user._id, { password: hashedPassword }).exec();
		return true;
	},
};
