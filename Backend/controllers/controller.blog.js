const mongoose = require('mongoose');
const Blog = require('../models/model.blog');
const User = require('../models/model.user');
const { getDecodedToken } = require('../lib/tokenValidators');

module.exports = {
	getAllBlogs: async (req, res) => {
		const blogs = await Blog.find();
		return blogs;
	},
	addBlog: async (req) => {
		const { title, image_url, descripton } = req.body;
		let existingUser;
		const decodedId = getDecodedToken(req);

		try {
			existingUser = await User.findById(decodedId);
		} catch (err) {
			return console.log(err);
		}

		if (!existingUser) {
			return 'Unable to find user by id';
		}
		const blog = await Blog.create({
			title: title,
			image_url: image_url,
			descripton: descripton,
			user: decodedId,
		});

		try {
			const session = await mongoose.startSession();
			session.startTransaction();
			await blog.save();
			existingUser.blogs.push(blog);
			await existingUser.save();
			await session.commitTransaction();
		} catch (err) {
			return { err };
		}
		return blog;
	},
	editBlog: async ({ params, body }) => {
		const { id } = params;
		const { title, descripton } = body;
		const findBlog = await Blog.findById(id);
		if (!findBlog) {
			throw Error('Blog with this id doesnt exist');
		}
		const blog = await Blog.findByIdAndUpdate(id, {
			title: title,
			descripton: descripton,
		});
		return 'Blog updated succesfully';
	},
	getBlogById: async (params) => {
		const { id } = params;
		const blog = await Blog.findById(id);
		return blog;
	},
	delteBlog: async (params) => {
		const { id } = params;
		const findBlog = await Blog.findById(id);

		if (!findBlog) {
			throw Error('Blog with this id doesnt exist');
		}
		const blog = await Blog.findByIdAndRemove(id).populate('user');
		await blog.user.blogs.pull(blog);
		await blog.user.save();
		return 'Blog deleted succesfully';
	},
	getBlogsByUserId: async (req) => {
		const decodedId = getDecodedToken(req);
		const findBlogs = await User.findById(decodedId).populate('blogs');
		return findBlogs;
	},
};
