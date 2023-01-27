const express = require('express');
const router = express.Router();
const userController = require('../controllers/controller.user');
const { respond } = require('../lib/responder');

router.post('/register', async (req, res) => {
	try {
		const user = await userController.register(req.body);
		return respond(res, user);
	} catch (err) {
		return respond(res, err.message, false);
	}
});

module.exports = router;
