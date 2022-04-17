const router = require('express').Router();

const authController = require('../controller/auth-controller');


router.get('/', (req, res) => {
    res.send(`<h3> Hello Express JS </h3>`)
})
router.post('/api/auth/login', authController.login);
router.post('/api/auth/register', authController.register);




module.exports = router;