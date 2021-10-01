const express = require("express");
const router = express.Router();
const ADMIN = process.env.ADMIN;
const scheduleCtrl = require("../controller/classScheduleController");
const { authRole } = require("../controller/authentication/auth");

router.get("/", scheduleCtrl.getAllClasses);
router.put("/", authRole(ADMIN), scheduleCtrl.updateClasses);
router.post("/", authRole(ADMIN), scheduleCtrl.postClasses);
router.delete("/", authRole(ADMIN), scheduleCtrl.deleteClasses);
router.put("/updateClassesName",authRole(ADMIN), scheduleCtrl.updateClassesName);
router.put("/getClassById",authRole(ADMIN), scheduleCtrl.getClassById);

module.exports = router;
