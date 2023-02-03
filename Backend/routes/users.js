var express = require('express');
var router = express.Router();
const { validateUserToken } = require('../lib/tokenValidators');
const { respond } = require('../lib/responder');
const userController = require('../controllers/controller.user');

/* GET users listing. */
// router.get('/me', async (req, res) => {
// 	try {
// 		const result = await userController.getMe(req.headers.authorization);

// 		return respond(res, result);
// 	} catch (err) {
// 		return respond(res, err.message, false);
// 	}
// });

router.get('/:id', async (req, res) => {
	try {
		const result = await userController.getUserById(req.params);

		return respond(res, result);
	} catch (err) {
		return respond(res, err.message, false);
	}
});

router.put('/edit/:id', validateUserToken, async (req, res) => {
	try {
		const user = await userController.editUser(req);
		return respond(res, user);
	} catch (err) {
		return respond(res, err.message, false);
	}
});
module.exports = router;
