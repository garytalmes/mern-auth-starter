const router = require('express').Router();

// Import any controllers needed here
const { createUser, authUser, verifyUser } = require('../../controllers/user-controller');

// Declare the routes that point to the controllers above
router.route('/').post(createUser);
router.route('/auth').post(authUser);
router.route('/verify').post(verifyUser);

module.exports = router;
