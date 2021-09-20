const express = require('express')
const router = express.Router();
const scheduleCtrl = require('../controller/classScheduleController');
const {authRole} = require('../controller/authentication/auth');


router.get('/',scheduleCtrl.getAllClasses);
router.put('/',authRole("Staff"),scheduleCtrl.updateClasses);
router.post('/',authRole("Staff"),scheduleCtrl.postClasses);
router.delete('/',authRole("Staff"),scheduleCtrl.deleteClasses)
router.put('/updateClassesName',authRole("Staff"),scheduleCtrl.updateClassesName)

module.exports = router;