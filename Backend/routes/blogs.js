const express = require('express');
const router = express.Router();
const blogController = require('../controllers/controller.blog');
const fieldValidators = require('../lib/filedValidator');
const { respond } = require('../lib/responder');
const { validateUserToken, getDecodedToken } = require('../lib/tokenValidators');
const jwt = require('jsonwebtoken');

router.get('/', validateUserToken, async (req, res) => {
	try {
		const blogs = await blogController.getAllBlogs();
		return respond(res, blogs);
	} catch (err) {
		return respond(res, err.message, false);
	}
});
router.post(
	'/add-blog',
	validateUserToken,
	fieldValidators.validate.addBlog,
	fieldValidators.validateResult,
	async (req, res) => {
		try {
			const blog = await blogController.addBlog(req);
			return respond(res, blog);
		} catch (err) {
			return respond(res, err.message, false);
		}
	}
);
router.put('/edit-blog/:id', validateUserToken, async (req, res) => {
	try {
		const blog = await blogController.editBlog(req);
		return respond(res, blog);
	} catch (err) {
		return respond(res, err.message, false);
	}
});
router.get('/get-blog/:id', validateUserToken, async (req, res) => {
	try {
		const blog = await blogController.getBlogById(req.params);
		return respond(res, blog);
	} catch (err) {
		return respond(res, err.message, false);
	}
});
router.delete('/delete/:id', validateUserToken, async (req, res) => {
	try {
		const blog = await blogController.delteBlog(req.params);
		return respond(res, blog);
	} catch (err) {
		return respond(res, err.message, false);
	}
});
router.get('/users/', validateUserToken, async (req, res) => {
	try {
		const userBlogs = await blogController.getBlogsByUserId(req);
		return respond(res, userBlogs);
	} catch (err) {
		return respond(res, err.message, false);
	}
});

module.exports = router;
