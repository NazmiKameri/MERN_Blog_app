var express = require('express');
var router = express.Router();
const { validateUserToken } = require('../lib/tokenValidators');
const { respond } = require('../lib/responder');
const userController = require('../controllers/controller.user');

/* GET users listing. */
router.get('/me', async (req, res) => {
	try {
		// console.log(req.decoded);
		console.log(req);
		const result = await userController.getMe(req);

		return respond(res, result);
	} catch (err) {
		return respond(res, err.message, false);
	}
});
module.exports = router;
