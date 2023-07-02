const {Router} = require("express");
const router2 = Router();
const userCtrl = require('../controller/mark.controller')

router2.get('/media', userCtrl.getMedia);
router2.get('/apuntadas', userCtrl.getAsignaturas);
router2.get('/apuntadas2', userCtrl.getAsignaturas2);
router2.get('/impartidas', userCtrl.getImpartidasID);
router2.get('/impartidas2', userCtrl.getImpartidasID2);





module.exports = router2;