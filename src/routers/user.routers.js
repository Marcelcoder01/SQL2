const {Router} = require("express");
const router = Router();
const userCtrl = require('../controller/user.controller')

router.get('/alumnos', userCtrl.getUser);
router.post('/alumnos', userCtrl.postUser);
router.put('/alumnos', userCtrl.putUser);
router.delete('/alumnos', userCtrl.deleteUser);




module.exports = router;